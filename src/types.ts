export interface Pillar {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  details: string;
  keyFocusAreas: string[];
}

export interface ValueItem {
  name: string;
  description: string;
  iconName: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  status: 'Active' | 'Upcoming' | 'Applications Open';
}

export interface FlagshipInitiative {
  id: string;
  plateNumber: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  iconName: string;
  image: string;
  focusAreas: string[];
  programs: Program[];
  stageLabel: string;
}

export interface FoundationCommitment {
  code: string;
  label: string;
  title: string;
  description: string;
}

export interface KalamQuote {
  text: string;
  context: string;
}

export interface ApplicationSubmission {
  id: string;
  type: 'volunteer' | 'startup' | 'scholarship' | 'partner' | 'contact';
  name: string;
  email: string;
  phone: string;
  organization?: string;
  initiativeInterest: string;
  message: string;
  submittedAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedPrompt?: string;
}
