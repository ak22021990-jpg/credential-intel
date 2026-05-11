export interface Option {
  title: string;
  detail: string;
}

export interface QuestionItem {
  category: string;
  country: string;
  question: string;
  context: string;
  options: Option[];
  answer: number;       // index into options[]
  explanation: string;
}

export interface Lesson {
  icon: string;
  text: string;
}

export interface MiniGame {
  id: string;
  badge: string;
  title: string;
  description: string;
  emptyMessage: string;
  completionMessage: string;
  items: QuestionItem[];
  flags?: string[];
  lessons: Lesson[];
}

export interface CompletedGame {
  score: number;
  total: number;
}

export interface FeedbackState {
  message: string;
  type: 'success' | 'error' | '';
}

export type Rank = 'Trainee' | 'Specialist' | 'Lead Analyst' | 'Master Screener';

export interface ReferenceItem {
  country: string;
  summary: string;
  points: string[];
}

export interface DifferenceItem {
  title: string;
  body: string;
}

export interface PersistedState {
  completedGames: Record<string, CompletedGame>;
  earnedBadges: string[];
  username: string;
}
