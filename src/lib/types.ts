import type { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  gradientClasses: string; // e.g., "from-teal-500 to-sky-600"
  lessonsCount: number;
}

export interface Lesson {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string; // Link to external video
  pdfUrl?: string; // Link to external PDF
  audioUrl?: string; // Link to external audio
  isCompleted: boolean;
  quizId?: string;
  duration: string; // e.g., "15 min"
}

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  xp: number;
  level: number;
  badges: { name: string; icon: LucideIcon; color: string }[];
  streaks: number; // consecutive days
  coursesCompleted: number;
  lessonsCompleted: number;
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation?: string;
}

export interface Quiz {
  id:string;
  lessonId: string;
  title: string;
  questions: Question[];
}
