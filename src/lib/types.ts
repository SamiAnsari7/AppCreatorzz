import type { LucideIcon } from 'lucide-react';

export interface BadgeInfo {
  id: string; // Unique ID for the badge, e.g., lessonId or a specific achievement
  name: string;
  icon: LucideIcon;
  color: string; // Tailwind color class e.g. "text-yellow-500"
  description?: string; // Optional description for the badge
  earnedDate?: string; // Optional: ISO date string when badge was earned
}

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
  badgeDetails?: BadgeInfo; // Optional: Badge awarded for completing this lesson
}

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  xp: number;
  level: number;
  badges: BadgeInfo[];
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

