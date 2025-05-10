import type { Category, Lesson, UserProfile, Quiz } from '@/lib/types';
import { Calculator, FlaskConical, BookOpenText, Landmark, Award, CheckCircle, TrendingUp, BarChartBig, Video, FileText, Mic, Search } from 'lucide-react';

export const MOCK_USER_PROFILE: UserProfile = {
  id: 'user123',
  name: 'Alex Johnson',
  avatarUrl: 'https://picsum.photos/seed/alex/200/200', // Changed to picsum.photos
  xp: 1250,
  level: 12,
  badges: [
    { name: 'Math Starter', icon: Calculator, color: 'text-green-500' },
    { name: 'Science Explorer', icon: FlaskConical, color: 'text-blue-500' },
    { name: 'Grammar Pro', icon: BookOpenText, color: 'text-purple-500' },
    { name: 'Perfect Streak', icon: TrendingUp, color: 'text-yellow-500' },
  ],
  streaks: 7,
  coursesCompleted: 3,
  lessonsCompleted: 25,
};

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: Calculator,
    description: 'Explore algebra, geometry, calculus and more.',
    gradientClasses: 'from-teal-500 via-cyan-500 to-sky-600',
    lessonsCount: 5,
  },
  {
    id: 'science',
    name: 'Science',
    icon: FlaskConical,
    description: 'Discover physics, chemistry, biology concepts.',
    gradientClasses: 'from-blue-500 via-indigo-500 to-purple-600',
    lessonsCount: 4,
  },
  {
    id: 'english',
    name: 'English',
    icon: BookOpenText,
    description: 'Improve grammar, vocabulary, and literature skills.',
    gradientClasses: 'from-pink-500 via-red-500 to-yellow-500',
    lessonsCount: 6,
  },
  {
    id: 'history',
    name: 'History',
    icon: Landmark,
    description: 'Learn about world events and civilizations.',
    gradientClasses: 'from-yellow-500 via-amber-500 to-orange-600',
    lessonsCount: 3,
  },
];

export const MOCK_LESSONS: Lesson[] = [
  // Math Lessons
  {
    id: 'math-alg-101',
    categoryId: 'math',
    title: 'Introduction to Algebra',
    description: 'Understand basic algebraic expressions and equations.',
    thumbnailUrl: 'https://picsum.photos/seed/algebra/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
    isCompleted: true,
    quizId: 'quiz-alg-101',
    duration: '25 min',
  },
  {
    id: 'math-geo-101',
    categoryId: 'math',
    title: 'Basics of Geometry',
    description: 'Learn about shapes, lines, and angles.',
    thumbnailUrl: 'https://picsum.photos/seed/geometry/400/225',
    isCompleted: false,
    quizId: 'quiz-geo-101',
    duration: '30 min',
  },
  // Science Lessons
  {
    id: 'sci-phy-101',
    categoryId: 'science',
    title: 'Newton\'s Laws of Motion',
    description: 'Explore the fundamental laws governing motion.',
    thumbnailUrl: 'https://picsum.photos/seed/physics/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isCompleted: true,
    quizId: 'quiz-phy-101',
    duration: '35 min',
  },
  {
    id: 'sci-chem-101',
    categoryId: 'science',
    title: 'Introduction to Chemical Reactions',
    description: 'Understand how substances interact and change.',
    thumbnailUrl: 'https://picsum.photos/seed/chemistry/400/225',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    isCompleted: false,
    duration: '20 min',
  },
  // English Lessons
  {
    id: 'eng-gram-101',
    categoryId: 'english',
    title: 'Mastering Tenses',
    description: 'Learn to use different verb tenses correctly.',
    thumbnailUrl: 'https://picsum.photos/seed/grammar/400/225',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
    isCompleted: true,
    quizId: 'quiz-gram-101',
    duration: '15 min',
  },
  {
    id: 'eng-vocab-101',
    categoryId: 'english',
    title: 'Advanced Vocabulary Building',
    description: 'Expand your word power with new vocabulary.',
    thumbnailUrl: 'https://picsum.photos/seed/vocabulary/400/225',
    isCompleted: false,
    duration: '22 min',
  },
    // History Lessons
  {
    id: 'hist-ww1-101',
    categoryId: 'history',
    title: 'Causes of World War I',
    description: 'Understand the events leading to the Great War.',
    thumbnailUrl: 'https://picsum.photos/seed/ww1/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    isCompleted: false,
    quizId: 'quiz-hist-ww1',
    duration: '40 min',
  },
];

export const MOCK_QUIZZES: Quiz[] = [
  {
    id: 'quiz-alg-101',
    lessonId: 'math-alg-101',
    title: 'Algebra Basics Quiz',
    questions: [
      {
        id: 'q1',
        text: 'What is the value of x if 2x + 3 = 7?',
        options: [
          { id: 'opt1', text: '1' },
          { id: 'opt2', text: '2' },
          { id: 'opt3', text: '3' },
          { id: 'opt4', text: '4' },
        ],
        correctOptionId: 'opt2',
        explanation: '2x + 3 = 7  =>  2x = 4  =>  x = 2.'
      },
      {
        id: 'q2',
        text: 'Simplify the expression: 3(x + 2) - x',
        options: [
          { id: 'opt1', text: '2x + 6' },
          { id: 'opt2', text: '3x + 6' },
          { id: 'opt3', text: '2x + 2' },
          { id: 'opt4', text: '4x + 6' },
        ],
        correctOptionId: 'opt1',
        explanation: '3(x + 2) - x = 3x + 6 - x = 2x + 6.'
      },
    ],
  },
  {
    id: 'quiz-phy-101',
    lessonId: 'sci-phy-101',
    title: 'Newton\'s Laws Quiz',
    questions: [
      {
        id: 'q1',
        text: 'Which law is also known as the law of inertia?',
        options: [
          { id: 'opt1', text: 'First Law' },
          { id: 'opt2', text: 'Second Law' },
          { id: 'opt3', text: 'Third Law' },
        ],
        correctOptionId: 'opt1',
        explanation: 'Newton\'s First Law states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.'
      },
    ],
  },
  {
    id: 'quiz-gram-101',
    lessonId: 'eng-gram-101',
    title: 'Tenses Quiz',
    questions: [
        {
            id: 'q1',
            text: 'Which tense is used in: "She ___ (go) to the market yesterday"?',
            options: [
                {id: 'opt1', text: 'Goes'},
                {id: 'opt2', text: 'Went'},
                {id: 'opt3', text: 'Is going'},
                {id: 'opt4', text: 'Will go'},
            ],
            correctOptionId: 'opt2',
            explanation: 'The word "yesterday" indicates past tense, so "went" is correct.'
        }
    ]
  },
  {
    id: 'quiz-hist-ww1',
    lessonId: 'hist-ww1-101',
    title: 'World War I Causes Quiz',
    questions: [
        {
            id: 'q1',
            text: 'Which event is often cited as the immediate trigger for World War I?',
            options: [
                {id: 'opt1', text: 'The sinking of the Lusitania'},
                {id: 'opt2', text: 'The assassination of Archduke Franz Ferdinand'},
                {id: 'opt3', text: 'The Battle of Verdun'},
                {id: 'opt4', text: 'The Russian Revolution'},
            ],
            correctOptionId: 'opt2',
            explanation: 'The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on June 28, 1914, is widely considered the event that triggered the outbreak of World War I.'
        }
    ]
  }
];

export const getCategoryById = (id: string): Category | undefined => MOCK_CATEGORIES.find(cat => cat.id === id);
export const getLessonsByCategoryId = (categoryId: string): Lesson[] => MOCK_LESSONS.filter(lesson => lesson.categoryId === categoryId);
export const getLessonById = (id: string): Lesson | undefined => MOCK_LESSONS.find(lesson => lesson.id === id);
export const getQuizById = (id: string): Quiz | undefined => MOCK_QUIZZES.find(quiz => quiz.id === id);

// Helper function to ensure all lesson thumbnails are from picsum.photos
// This is more of a conceptual fix as data is static. In a real app, data fetching/validation would handle this.
MOCK_LESSONS.forEach(lesson => {
  if (!lesson.thumbnailUrl.startsWith('https://picsum.photos')) {
    // Replace with a generic picsum URL if it's not already one.
    // This is a simple example; a more robust solution might involve hashing title for a seed.
    const seed = lesson.id.replace(/[^a-zA-Z0-9]/g, ''); // create a seed from id
    lesson.thumbnailUrl = `https://picsum.photos/seed/${seed}/400/225`;
  }
});
