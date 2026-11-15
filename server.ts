import express from 'express';
import http from 'http';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for application submissions (volunteers, startups, scholarships, partners)
const submissions: any[] = [];

// Initialize Gemini Client lazily or safely
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  try {
    return new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
    return null;
  }
}

// System prompt for Kalam Inspire AI Mentor
const KALAM_MENTOR_SYSTEM_INSTRUCTION = `
You are the "Kalam Inspire AI Mentor", an intelligent, empathetic, and encouraging advisor for the Kalam Inspire Foundation.
Your mission is to guide students, aspiring entrepreneurs, young scientists, job seekers, and volunteers with practical advice, career roadmaps, startup mentorship, and inspiration based on the values and teachings of Dr. A.P.J. Abdul Kalam.

Core Pillars you advocate for:
1. Education (STEM, digital learning, scholarships, curiosity)
2. Innovation (scientific thinking, design thinking, robotics, AI for good)
3. Skill Development (vocational training, coding, financial literacy, employability)
4. Entrepreneurship (incubation, solving local societal problems, perseverance)
5. Careers & Employment (guidance, resume tips, interview prep, internships)
6. Sports & Youth Development (discipline, team spirit, physical fitness)
7. Research & Knowledge (evidence-based thinking, open publications)
8. Community Development (health, clean environment, women empowerment)
9. Leadership & Civic Engagement (integrity, humility, ethical governance)

Tone and style:
- Warm, highly encouraging, patriotic, respectful, and practical.
- Use Dr. Kalam's favorite concepts like "Ignited Minds", "Wings of Fire", "Scientific Temperament", "Nation-Building", and "Continuous Learning".
- When answering career or startup queries, provide clear, actionable bullet points and reference relevant Kalam Inspire Foundation flagship initiatives (e.g., Kalam Inspire Academy, Kalam Inspire Labs, Kalam Inspire Startups, Kalam Inspire Skills, Kalam Inspire Careers).
- Keep answers structured, inspiring, and concise (under 250 words unless detailed roadmap is asked).
- Maintain the official disclaimer: Kalam Inspire Foundation is an independent non-profit inspired by Dr. Kalam's vision.
`;

// API Routes
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    foundation: 'KALAM INSPIRE FOUNDATION',
    timestamp: new Date().toISOString(),
    aiAvailable: !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY'
  });
});

// AI Mentor route
app.post('/api/ai/mentor', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message text is required.' });
      return;
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Friendly, inspiring fallback responses if API Key is not configured
      const lower = message.toLowerCase();
      let fallbackReply = `Greetings from Kalam Inspire Foundation! `;
      if (lower.includes('career') || lower.includes('job') || lower.includes('resume')) {
        fallbackReply += `Dr. Kalam believed that excellence is a continuous process. For career guidance, we recommend building core technical and soft skills through Kalam Inspire Skills and applying for internships via Kalam Inspire Careers!`;
      } else if (lower.includes('startup') || lower.includes('business') || lower.includes('idea')) {
        fallbackReply += `To transform an idea into a startup, focus on solving a genuine societal problem with integrity and scientific thinking. Explore Kalam Inspire Startups for incubation grants and mentorship!`;
      } else if (lower.includes('scholarship') || lower.includes('study') || lower.includes('stem')) {
        fallbackReply += `Education is the primary catalyst for nation-building. Explore Kalam Inspire Academy for STEM fellowships and merit-based scholarship opportunities!`;
      } else {
        fallbackReply += `As Dr. Kalam said: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great." How can Kalam Inspire Foundation assist you in education, innovation, or leadership today?`;
      }

      res.json({
        reply: fallbackReply,
        isFallback: true,
        notice: 'Configure GEMINI_API_KEY in secrets for live AI interactions.'
      });
      return;
    }

    // Format conversation for Gemini (strip leading model/welcome messages so contents starts with user)
    const historyTurns = Array.isArray(conversationHistory)
      ? conversationHistory
          .filter((msg: { sender?: string; text?: string }) => msg && typeof msg.text === 'string' && msg.text.trim().length > 0)
          .map((msg: { sender: string; text: string }) => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          }))
      : [];

    while (historyTurns.length > 0 && historyTurns[0].role !== 'user') {
      historyTurns.shift();
    }

    const contents = [
      ...historyTurns,
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction: KALAM_MENTOR_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 600,
      }
    });

    const replyText = response.text || "Thank you for reaching out to Kalam Inspire AI Mentor. Let us continue inspiring youth and building the nation together.";

    res.json({
      reply: replyText,
      isFallback: false
    });
  } catch (error: any) {
    console.error('Error generating AI response:', error);
    res.status(500).json({
      reply: "We are currently experiencing high request volume. Keep dreaming big, work with integrity, and explore Kalam Inspire Foundation programs!",
      error: error?.message || 'Server error'
    });
  }
});

// Application submission route
app.post('/api/applications', (req, res) => {
  try {
    const { type, name, email, phone, organization, initiativeInterest, message } = req.body;

    if (!type || !name || !email) {
      res.status(400).json({ error: 'Name, email, and submission type are required.' });
      return;
    }

    const newSubmission = {
      id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      type,
      name,
      email,
      phone: phone || '',
      organization: organization || '',
      initiativeInterest: initiativeInterest || 'General',
      message: message || '',
      submittedAt: new Date().toISOString()
    };

    submissions.push(newSubmission);

    res.json({
      success: true,
      message: `Thank you, ${name}! Your ${type} application for Kalam Inspire Foundation has been successfully recorded.`,
      submissionId: newSubmission.id
    });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to record application.' });
  }
});

// Retrieve all submissions (for internal preview / demo tracking)
app.get('/api/applications', (_req, res) => {
  res.json({
    total: submissions.length,
    submissions
  });
});

async function startServer() {
  const httpServer = http.createServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`KALAM INSPIRE FOUNDATION Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
