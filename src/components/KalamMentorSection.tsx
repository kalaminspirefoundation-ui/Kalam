import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash2, RefreshCw, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';

export const KalamMentorSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm_welcome',
      sender: 'assistant',
      text: "Greetings! I am the Kalam Inspire AI Mentor, inspired by Dr. A.P.J. Abdul Kalam's vision for youth, scientific curiosity, and nation-building. How can I assist you with career roadmaps, STEM learning, early startup ideas, or volunteering pathways today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    'How can my school partner for a Kalam STEM & Robotics workshop?',
    'Scholarship and learning pathways under Kalam Inspire Academy',
    'Early-stage startup mentorship guidance for young founders',
    'Career preparation and interview readiness tips'
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: queryText,
          conversationHistory: messages.slice(-6)
        })
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `a_${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Thank you for reaching out. Let us keep learning and serving society together.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `e_${Date.now()}`,
        sender: 'assistant',
        text: "As Dr. Kalam said: 'Excellence is a continuous process and not an accident.' Explore our 9 Flagship Initiatives to connect with mentors and open cohorts.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'm_welcome',
        sender: 'assistant',
        text: "Greetings! I am the Kalam Inspire AI Mentor, inspired by Dr. A.P.J. Abdul Kalam's vision for youth, scientific curiosity, and nation-building. How can I assist you with career roadmaps, STEM learning, early startup ideas, or volunteering pathways today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <section id="ai-mentor" className="py-20 bg-[#0B1120] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">
              04 · Advisory Desk
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Kalam Inspire AI Mentor
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            Ask for structured career guidance, startup feedback, STEM learning pathways, or information on joining our cohorts.
          </p>
        </div>

        {/* 12-Column Obsidian Frame */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Suggested Prompts Panel */}
          <div className="lg:col-span-4 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Suggested Topics
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Choose a prompt below to start a conversation, or write your own question in the console.
              </p>

              <div className="space-y-2.5">
                {suggestedPrompts.map((promptText, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(promptText)}
                    disabled={isLoading}
                    className="w-full p-3.5 rounded-2xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-left text-xs sm:text-sm text-slate-200 hover:text-white transition-colors flex items-start justify-between gap-3 group disabled:opacity-50"
                  >
                    <span className="leading-snug">{promptText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 mt-0.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400">
              Guidance aligned with our 9 Core Pillars and 9 Flagship Initiatives.
            </div>
          </div>

          {/* Right Framed Console */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-900 border border-slate-800 p-2.5 flex flex-col h-[560px]">
            <div className="flex-1 rounded-2xl bg-[#060A14] border border-slate-800/80 flex flex-col overflow-hidden">
              {/* Console Header */}
              <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    Mentor Console
                  </h3>
                  <p className="text-xs text-slate-400">
                    Ask a question about learning, startups, or careers
                  </p>
                </div>

                <button
                  onClick={handleClearChat}
                  className="px-3 py-1.5 border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium rounded-xl inline-flex items-center gap-1.5 transition-colors"
                  title="Reset Conversation"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Messages Thread */}
              <div className="flex-1 p-5 overflow-y-auto space-y-5">
                {messages.map((msg) => {
                  const isUser = msg.sender === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-1.5">
                        <span>{isUser ? 'You' : 'Kalam Inspire Mentor'}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{msg.timestamp}</span>
                      </div>
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line border ${
                          isUser
                            ? 'bg-[#1E40AF] text-white border-[#1E40AF]'
                            : 'bg-slate-900 text-slate-200 border-slate-800'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex flex-col items-start">
                    <div className="text-[11px] font-mono text-slate-400 mb-1.5">
                      Kalam Inspire Mentor · Preparing response
                    </div>
                    <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl text-xs text-slate-300 inline-flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                      <span>Composing guidance...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Form */}
              <div className="p-3.5 border-t border-slate-800 bg-slate-900/50">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2.5"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about STEM workshops, career paths, or startup ideas..."
                    disabled={isLoading}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-bold rounded-xl inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
