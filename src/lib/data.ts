import type { Category, Lesson, UserProfile, Quiz } from '@/lib/types';
import { Calculator, FlaskConical, BookOpenText, Landmark, Award, CheckCircle, TrendingUp, BarChartBig, Video, FileText, Mic, Search, Brain, Atom, Palette, Globe, Lightbulb, Rocket, Dna, Code, Languages } from 'lucide-react';

export const MOCK_USER_PROFILE: UserProfile = {
  id: 'user123',
  name: 'Alex Johnson',
  avatarUrl: 'https://picsum.photos/seed/alex/200/200',
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
    lessonsCount: 10, // Updated count
  },
  {
    id: 'science',
    name: 'Science',
    icon: FlaskConical,
    description: 'Discover physics, chemistry, biology concepts.',
    gradientClasses: 'from-blue-500 via-indigo-500 to-purple-600',
    lessonsCount: 10, // Updated count
  },
  {
    id: 'english',
    name: 'English',
    icon: BookOpenText,
    description: 'Improve grammar, vocabulary, and literature skills.',
    gradientClasses: 'from-pink-500 via-red-500 to-yellow-500',
    lessonsCount: 10, // Updated count
  },
  {
    id: 'history',
    name: 'History',
    icon: Landmark,
    description: 'Learn about world events and civilizations.',
    gradientClasses: 'from-yellow-500 via-amber-500 to-orange-600',
    lessonsCount: 10, // Updated count
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: Code,
    description: 'Understand coding, AI, and digital literacy.',
    gradientClasses: 'from-gray-500 via-slate-500 to-neutral-600',
    lessonsCount: 5,
  },
  {
    id: 'arts',
    name: 'Arts',
    icon: Palette,
    description: 'Explore painting, music, and creative expression.',
    gradientClasses: 'from-rose-400 via-fuchsia-500 to-indigo-500',
    lessonsCount: 5,
  },
];

export const MOCK_LESSONS: Lesson[] = [
  // Math Lessons (target 10)
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
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'math-calc-101',
    categoryId: 'math',
    title: 'Fundamentals of Calculus',
    description: 'An introduction to limits and derivatives.',
    thumbnailUrl: 'https://picsum.photos/seed/calculus/400/225',
    isCompleted: false,
    quizId: 'quiz-calc-101',
    duration: '45 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'math-stats-101',
    categoryId: 'math',
    title: 'Introduction to Statistics',
    description: 'Learn about data analysis and probability.',
    thumbnailUrl: 'https://picsum.photos/seed/statistics/400/225',
    isCompleted: true,
    quizId: 'quiz-stats-101',
    duration: '30 min',
  },
   {
    id: 'math-trig-101',
    categoryId: 'math',
    title: 'Trigonometry Essentials',
    description: 'Explore sine, cosine, tangent and their applications.',
    thumbnailUrl: 'https://picsum.photos/seed/trigonometry/400/225',
    isCompleted: false,
    quizId: 'quiz-trig-101',
    duration: '35 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'math-prob-101',
    categoryId: 'math',
    title: 'Probability Basics',
    description: 'Understanding chances and outcomes.',
    thumbnailUrl: 'https://picsum.photos/seed/probability/400/225',
    isCompleted: true,
    quizId: 'quiz-prob-101',
    duration: '20 min',
  },
  {
    id: 'math-logic-101',
    categoryId: 'math',
    title: 'Introduction to Logic',
    description: 'Basic principles of logical reasoning.',
    thumbnailUrl: 'https://picsum.photos/seed/logic/400/225',
    isCompleted: false,
    quizId: 'quiz-logic-101',
    duration: '25 min',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
  },
  {
    id: 'math-numtheory-101',
    categoryId: 'math',
    title: 'Number Theory for Beginners',
    description: 'Exploring prime numbers, divisibility, and modular arithmetic.',
    thumbnailUrl: 'https://picsum.photos/seed/numtheory/400/225',
    isCompleted: false,
    quizId: 'quiz-numtheory-101',
    duration: '30 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'math-linalg-101',
    categoryId: 'math',
    title: 'Intro to Linear Algebra',
    description: 'Understanding vectors, matrices, and linear systems.',
    thumbnailUrl: 'https://picsum.photos/seed/linalg/400/225',
    isCompleted: true,
    quizId: 'quiz-linalg-101',
    duration: '40 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'math-financial-101',
    categoryId: 'math',
    title: 'Financial Mathematics Basics',
    description: 'Simple interest, compound interest, and basic financial calculations.',
    thumbnailUrl: 'https://picsum.photos/seed/financialmath/400/225',
    isCompleted: false,
    quizId: 'quiz-financial-101',
    duration: '28 min',
  },


  // Science Lessons (target 10)
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
    quizId: 'quiz-chem-101',
    duration: '20 min',
  },
  {
    id: 'sci-bio-101',
    categoryId: 'science',
    title: 'The Basics of Cell Biology',
    description: 'Discover the fundamental unit of life.',
    thumbnailUrl: 'https://picsum.photos/seed/biology/400/225',
    isCompleted: true,
    quizId: 'quiz-bio-101',
    duration: '40 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'sci-eco-101',
    categoryId: 'science',
    title: 'Ecosystems and Biomes',
    description: 'Learn about different environments and their inhabitants.',
    thumbnailUrl: 'https://picsum.photos/seed/ecology/400/225',
    isCompleted: false,
    quizId: 'quiz-eco-101',
    duration: '30 min',
  },
   {
    id: 'sci-astro-101',
    categoryId: 'science',
    title: 'Our Solar System',
    description: 'Explore the planets, moons, and other celestial bodies in our solar system.',
    thumbnailUrl: 'https://picsum.photos/seed/astronomy/400/225',
    isCompleted: false,
    quizId: 'quiz-astro-101',
    duration: '28 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'sci-genetics-101',
    categoryId: 'science',
    title: 'Introduction to Genetics',
    description: 'Learn about DNA, genes, and heredity.',
    thumbnailUrl: 'https://picsum.photos/seed/genetics/400/225',
    isCompleted: true,
    quizId: 'quiz-genetics-101',
    duration: '32 min',
  },
  {
    id: 'sci-geology-101',
    categoryId: 'science',
    title: 'Earth\'s Structure and Plate Tectonics',
    description: 'Understanding layers of the Earth and continental drift.',
    thumbnailUrl: 'https://picsum.photos/seed/geology/400/225',
    isCompleted: false,
    quizId: 'quiz-geology-101',
    duration: '38 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'sci-humanbody-101',
    categoryId: 'science',
    title: 'Overview of Human Anatomy',
    description: 'A look at the major systems of the human body.',
    thumbnailUrl: 'https://picsum.photos/seed/humanbody/400/225',
    isCompleted: true,
    quizId: 'quiz-humanbody-101',
    duration: '42 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'sci-envsci-101',
    categoryId: 'science',
    title: 'Environmental Science Basics',
    description: 'Understanding pollution, conservation, and climate change.',
    thumbnailUrl: 'https://picsum.photos/seed/envscience/400/225',
    isCompleted: false,
    quizId: 'quiz-envsci-101',
    duration: '33 min',
  },
  {
    id: 'sci-lightoptics-101',
    categoryId: 'science',
    title: 'Light and Optics',
    description: 'Exploring the properties of light, reflection, and refraction.',
    thumbnailUrl: 'https://picsum.photos/seed/lightoptics/400/225',
    isCompleted: true,
    quizId: 'quiz-lightoptics-101',
    duration: '27 min',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
  },


  // English Lessons (target 10)
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
    quizId: 'quiz-vocab-101',
    duration: '22 min',
  },
  {
    id: 'eng-lit-101',
    categoryId: 'english',
    title: 'Introduction to Shakespeare',
    description: 'An overview of Shakespeare\'s major works and themes.',
    thumbnailUrl: 'https://picsum.photos/seed/shakespeare/400/225',
    isCompleted: true,
    quizId: 'quiz-lit-101',
    duration: '35 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'eng-writing-101',
    categoryId: 'english',
    title: 'Essay Writing Fundamentals',
    description: 'Learn to structure and write compelling essays.',
    thumbnailUrl: 'https://picsum.photos/seed/essaywriting/400/225',
    isCompleted: false,
    quizId: 'quiz-writing-101',
    duration: '30 min',
  },
   {
    id: 'eng-poetry-101',
    categoryId: 'english',
    title: 'Understanding Poetic Devices',
    description: 'Explore metaphors, similes, and other poetic techniques.',
    thumbnailUrl: 'https://picsum.photos/seed/poetry/400/225',
    isCompleted: false,
    quizId: 'quiz-poetry-101',
    duration: '25 min',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
  },
  {
    id: 'eng-speech-101',
    categoryId: 'english',
    title: 'Parts of Speech',
    description: 'Understand nouns, verbs, adjectives, and more.',
    thumbnailUrl: 'https://picsum.photos/seed/speechparts/400/225',
    isCompleted: true,
    quizId: 'quiz-speech-101',
    duration: '18 min',
  },
  {
    id: 'eng-reading-101',
    categoryId: 'english',
    title: 'Reading Comprehension Strategies',
    description: 'Improve your understanding of written texts.',
    thumbnailUrl: 'https://picsum.photos/seed/readingcomp/400/225',
    isCompleted: false,
    quizId: 'quiz-reading-101',
    duration: '25 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'eng-punctuation-101',
    categoryId: 'english',
    title: 'Punctuation Power',
    description: 'Mastering commas, semicolons, and apostrophes.',
    thumbnailUrl: 'https://picsum.photos/seed/punctuation/400/225',
    isCompleted: true,
    quizId: 'quiz-punctuation-101',
    duration: '20 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'eng-publicspeaking-101',
    categoryId: 'english',
    title: 'Intro to Public Speaking',
    description: 'Tips and techniques for effective presentations.',
    thumbnailUrl: 'https://picsum.photos/seed/publicspeaking/400/225',
    isCompleted: false,
    quizId: 'quiz-publicspeaking-101',
    duration: '30 min',
  },
  {
    id: 'eng-figurativelang-101',
    categoryId: 'english',
    title: 'Exploring Figurative Language',
    description: 'Understanding idioms, hyperboles, and irony.',
    thumbnailUrl: 'https://picsum.photos/seed/figurativelang/400/225',
    isCompleted: true,
    quizId: 'quiz-figurativelang-101',
    duration: '22 min',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
  },

  // History Lessons (target 10)
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
  {
    id: 'hist-egypt-101',
    categoryId: 'history',
    title: 'Ancient Egyptian Civilization',
    description: 'Explore the culture, pharaohs, and pyramids of ancient Egypt.',
    thumbnailUrl: 'https://picsum.photos/seed/egypt/400/225',
    isCompleted: true,
    quizId: 'quiz-hist-egypt',
    duration: '38 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'hist-rome-101',
    categoryId: 'history',
    title: 'The Roman Empire',
    description: 'Learn about the rise and fall of one of history\'s greatest empires.',
    thumbnailUrl: 'https://picsum.photos/seed/romanempire/400/225',
    isCompleted: false,
    quizId: 'quiz-hist-rome',
    duration: '45 min',
  },
  {
    id: 'hist-renaissance-101',
    categoryId: 'history',
    title: 'The European Renaissance',
    description: 'A period of great cultural and artistic change.',
    thumbnailUrl: 'https://picsum.photos/seed/renaissance/400/225',
    isCompleted: true,
    quizId: 'quiz-hist-renaissance',
    duration: '30 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'hist-civrights-101',
    categoryId: 'history',
    title: 'The Civil Rights Movement',
    description: 'Key figures and events in the fight for equality.',
    thumbnailUrl: 'https://picsum.photos/seed/civrights/400/225',
    isCompleted: false,
    quizId: 'quiz-hist-civrights',
    duration: '35 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'hist-industrialrev-101',
    categoryId: 'history',
    title: 'The Industrial Revolution',
    description: 'Transformations in manufacturing, technology, and society.',
    thumbnailUrl: 'https://picsum.photos/seed/industrialrev/400/225',
    isCompleted: true,
    quizId: 'quiz-hist-industrialrev',
    duration: '40 min',
  },
  {
    id: 'hist-coldwar-101',
    categoryId: 'history',
    title: 'The Cold War Era',
    description: 'The geopolitical tension between the US and Soviet Union.',
    thumbnailUrl: 'https://picsum.photos/seed/coldwar/400/225',
    isCompleted: false,
    quizId: 'quiz-hist-coldwar',
    duration: '42 min',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
  },
  {
    id: 'hist-exploration-101',
    categoryId: 'history',
    title: 'Age of Exploration',
    description: 'Voyages of discovery and their global impact.',
    thumbnailUrl: 'https://picsum.photos/seed/exploration/400/225',
    isCompleted: true,
    quizId: 'quiz-hist-exploration',
    duration: '33 min',
  },
  {
    id: 'hist-ancientgreece-101',
    categoryId: 'history',
    title: 'Ancient Greek Civilization',
    description: 'Philosophy, democracy, and mythology of ancient Greece.',
    thumbnailUrl: 'https://picsum.photos/seed/ancientgreece/400/225',
    isCompleted: false,
    quizId: 'quiz-hist-ancientgreece',
    duration: '37 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 'hist-worldwar2-101',
    categoryId: 'history',
    title: 'Overview of World War II',
    description: 'Key events, figures, and consequences of the global conflict.',
    thumbnailUrl: 'https://picsum.photos/seed/worldwar2/400/225',
    isCompleted: true,
    quizId: 'quiz-hist-worldwar2',
    duration: '50 min',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },

  // Technology Lessons (target 5)
  {
    id: 'tech-coding-101',
    categoryId: 'technology',
    title: 'Introduction to Coding',
    description: 'Learn the basics of programming concepts and Python.',
    thumbnailUrl: 'https://picsum.photos/seed/coding/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isCompleted: false,
    quizId: 'quiz-tech-coding-101',
    duration: '45 min',
  },
  {
    id: 'tech-ai-101',
    categoryId: 'technology',
    title: 'Understanding Artificial Intelligence',
    description: 'Explore machine learning, neural networks, and AI applications.',
    thumbnailUrl: 'https://picsum.photos/seed/ai/400/225',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    isCompleted: true,
    quizId: 'quiz-tech-ai-101',
    duration: '40 min',
  },
  {
    id: 'tech-cybersecurity-101',
    categoryId: 'technology',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn about online safety, threats, and protection.',
    thumbnailUrl: 'https://picsum.photos/seed/cybersecurity/400/225',
    isCompleted: false,
    quizId: 'quiz-tech-cybersecurity-101',
    duration: '35 min',
  },
  {
    id: 'tech-datascience-101',
    categoryId: 'technology',
    title: 'Introduction to Data Science',
    description: 'Basics of data analysis, visualization, and interpretation.',
    thumbnailUrl: 'https://picsum.photos/seed/datascience/400/225',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
    isCompleted: true,
    quizId: 'quiz-tech-datascience-101',
    duration: '30 min',
  },
  {
    id: 'tech-webdev-101',
    categoryId: 'technology',
    title: 'Web Development Basics (HTML & CSS)',
    description: 'Learn the building blocks of websites.',
    thumbnailUrl: 'https://picsum.photos/seed/webdev/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isCompleted: false,
    quizId: 'quiz-tech-webdev-101',
    duration: '50 min',
  },

  // Arts Lessons (target 5)
  {
    id: 'arts-drawing-101',
    categoryId: 'arts',
    title: 'Fundamentals of Drawing',
    description: 'Learn basic techniques, shading, and perspective.',
    thumbnailUrl: 'https://picsum.photos/seed/drawing/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isCompleted: true,
    quizId: 'quiz-arts-drawing-101',
    duration: '30 min',
  },
  {
    id: 'arts-music-theory-101',
    categoryId: 'arts',
    title: 'Introduction to Music Theory',
    description: 'Understand notes, scales, chords, and rhythm.',
    thumbnailUrl: 'https://picsum.photos/seed/musictheory/400/225',
    audioUrl: 'https://www.w3schools.com/html/horse.mp3',
    isCompleted: false,
    quizId: 'quiz-arts-music-theory-101',
    duration: '35 min',
  },
  {
    id: 'arts-color-theory-101',
    categoryId: 'arts',
    title: 'Color Theory for Artists',
    description: 'Learn about the color wheel, harmony, and contrast.',
    thumbnailUrl: 'https://picsum.photos/seed/colortheory/400/225',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    isCompleted: true,
    quizId: 'quiz-arts-color-theory-101',
    duration: '25 min',
  },
  {
    id: 'arts-photography-101',
    categoryId: 'arts',
    title: 'Basic Photography Composition',
    description: 'Understand rule of thirds, leading lines, and framing.',
    thumbnailUrl: 'https://picsum.photos/seed/photography/400/225',
    isCompleted: false,
    quizId: 'quiz-arts-photography-101',
    duration: '28 min',
  },
  {
    id: 'arts-arthistory-101',
    categoryId: 'arts',
    title: 'Overview of Art Movements',
    description: 'From Renaissance to Impressionism and Modern Art.',
    thumbnailUrl: 'https://picsum.photos/seed/arthistory/400/225',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isCompleted: true,
    quizId: 'quiz-arts-arthistory-101',
    duration: '40 min',
  },
];


export const MOCK_QUIZZES: Quiz[] = [
  // Math Quizzes
  {
    id: 'quiz-alg-101',
    lessonId: 'math-alg-101',
    title: 'Algebra Basics Quiz',
    questions: [
      {
        id: 'q1-alg-101',
        text: 'What is the value of x if 2x + 3 = 7?',
        options: [
          { id: 'opt1-alg-101-q1', text: '1' },
          { id: 'opt2-alg-101-q1', text: '2' },
          { id: 'opt3-alg-101-q1', text: '3' },
          { id: 'opt4-alg-101-q1', text: '4' },
        ],
        correctOptionId: 'opt2-alg-101-q1',
        explanation: '2x + 3 = 7  =>  2x = 4  =>  x = 2.'
      },
      {
        id: 'q2-alg-101',
        text: 'Simplify the expression: 3(x + 2) - x',
        options: [
          { id: 'opt1-alg-101-q2', text: '2x + 6' },
          { id: 'opt2-alg-101-q2', text: '3x + 6' },
          { id: 'opt3-alg-101-q2', text: '2x + 2' },
          { id: 'opt4-alg-101-q2', text: '4x + 6' },
        ],
        correctOptionId: 'opt1-alg-101-q2',
        explanation: '3(x + 2) - x = 3x + 6 - x = 2x + 6.'
      },
    ],
  },
  {
    id: 'quiz-geo-101',
    lessonId: 'math-geo-101',
    title: 'Geometry Basics Quiz',
    questions: [
      {
        id: 'q1-geo-101',
        text: 'How many sides does a triangle have?',
        options: [
          { id: 'opt1-geo-101-q1', text: '3' },
          { id: 'opt2-geo-101-q1', text: '4' },
          { id: 'opt3-geo-101-q1', text: '5' },
        ],
        correctOptionId: 'opt1-geo-101-q1',
        explanation: 'A triangle is a polygon with three edges and three vertices.'
      },
       {
        id: 'q2-geo-101',
        text: 'What is the sum of angles in a quadrilateral?',
        options: [
          { id: 'opt1-geo-101-q2', text: '180 degrees' },
          { id: 'opt2-geo-101-q2', text: '360 degrees' },
          { id: 'opt3-geo-101-q2', text: '270 degrees' },
        ],
        correctOptionId: 'opt2-geo-101-q2',
        explanation: 'A quadrilateral is a four-sided polygon, and the sum of its interior angles is always 360 degrees.'
      }
    ],
  },
  {
    id: 'quiz-calc-101',
    lessonId: 'math-calc-101',
    title: 'Calculus Fundamentals Quiz',
    questions: [
      {
        id: 'q1-calc-101',
        text: 'What is the derivative of x^2?',
        options: [
          { id: 'opt1-calc-101-q1', text: 'x' },
          { id: 'opt2-calc-101-q1', text: '2x' },
          { id: 'opt3-calc-101-q1', text: 'x^3/3' },
        ],
        correctOptionId: 'opt2-calc-101-q1',
        explanation: 'Using the power rule, the derivative of x^n is nx^(n-1). So for x^2, it is 2x^(2-1) = 2x.'
      },
      {
        id: 'q2-calc-101',
        text: 'What does an integral generally represent?',
        options: [
          { id: 'opt1-calc-101-q2', text: 'The slope of a curve' },
          { id: 'opt2-calc-101-q2', text: 'The area under a curve' },
          { id: 'opt3-calc-101-q2', text: 'The rate of change' },
        ],
        correctOptionId: 'opt2-calc-101-q2',
        explanation: 'A definite integral of a function represents the signed area between the function\'s graph and the x-axis over a given interval.'
      }
    ],
  },
  {
    id: 'quiz-stats-101',
    lessonId: 'math-stats-101',
    title: 'Statistics Introduction Quiz',
    questions: [
      {
        id: 'q1-stats-101',
        text: 'What is the "mean" of a dataset?',
        options: [
          { id: 'opt1-stats-101-q1', text: 'The middle value' },
          { id: 'opt2-stats-101-q1', text: 'The most frequent value' },
          { id: 'opt3-stats-101-q1', text: 'The average value' },
        ],
        correctOptionId: 'opt3-stats-101-q1',
        explanation: 'The mean is the sum of all values divided by the number of values, also known as the average.'
      },
      {
        id: 'q2-stats-101',
        text: 'What does "median" represent in a dataset?',
        options: [
          { id: 'opt1-stats-101-q2', text: 'The highest value' },
          { id: 'opt2-stats-101-q2', text: 'The middle value when sorted' },
          { id: 'opt3-stats-101-q2', text: 'The difference between highest and lowest' },
        ],
        correctOptionId: 'opt2-stats-101-q2',
        explanation: 'The median is the value separating the higher half from the lower half of a data sample. To find it, data must be sorted first.'
      }
    ],
  },
  {
    id: 'quiz-trig-101',
    lessonId: 'math-trig-101',
    title: 'Trigonometry Essentials Quiz',
    questions: [
      {
        id: 'q1-trig-101',
        text: 'In a right-angled triangle, what is sin(theta) equal to?',
        options: [
          { id: 'opt1-trig-101-q1', text: 'Adjacent / Hypotenuse' },
          { id: 'opt2-trig-101-q1', text: 'Opposite / Hypotenuse' },
          { id: 'opt3-trig-101-q1', text: 'Opposite / Adjacent' },
        ],
        correctOptionId: 'opt2-trig-101-q1',
        explanation: 'Sine of an angle in a right-angled triangle is the ratio of the length of the opposite side to the length of the hypotenuse (SOH).'
      },
      {
        id: 'q2-trig-101',
        text: 'What is the value of tan(45 degrees)?',
        options: [
          { id: 'opt1-trig-101-q2', text: '0' },
          { id: 'opt2-trig-101-q2', text: '1' },
          { id: 'opt3-trig-101-q2', text: 'Undefined' },
        ],
        correctOptionId: 'opt2-trig-101-q2',
        explanation: 'For a 45-45-90 triangle, the opposite and adjacent sides are equal, so tan(45) = Opposite/Adjacent = 1.'
      }
    ],
  },
  {
    id: 'quiz-prob-101',
    lessonId: 'math-prob-101',
    title: 'Probability Basics Quiz',
    questions: [
      {
        id: 'q1-prob-101',
        text: 'If you flip a fair coin, what is the probability of getting heads?',
        options: [
          { id: 'opt1-prob-101-q1', text: '1/4' },
          { id: 'opt2-prob-101-q1', text: '1/2' },
          { id: 'opt3-prob-101-q1', text: '3/4' },
        ],
        correctOptionId: 'opt2-prob-101-q1',
        explanation: 'A fair coin has two equally likely outcomes (heads or tails), so the probability of heads is 1 out of 2.'
      },
      {
        id: 'q2-prob-101',
        text: 'What is the probability of rolling a 6 on a standard six-sided die?',
        options: [
          { id: 'opt1-prob-101-q2', text: '1/6' },
          { id: 'opt2-prob-101-q2', text: '1/3' },
          { id: 'opt3-prob-101-q2', text: '1/2' },
        ],
        correctOptionId: 'opt1-prob-101-q2',
        explanation: 'A standard die has 6 equally likely outcomes, so the probability of rolling any specific number is 1/6.'
      }
    ]
  },
  {
    id: 'quiz-logic-101',
    lessonId: 'math-logic-101',
    title: 'Logic Introduction Quiz',
    questions: [
      {
        id: 'q1-logic-101',
        text: 'If P is true and Q is false, what is the truth value of "P AND Q"?',
        options: [
          { id: 'opt1-logic-101-q1', text: 'True' },
          { id: 'opt2-logic-101-q1', text: 'False' },
        ],
        correctOptionId: 'opt2-logic-101-q1',
        explanation: 'The logical AND operator is only true if both operands are true. Since Q is false, "P AND Q" is false.'
      },
      {
        id: 'q2-logic-101',
        text: 'If P is true, what is the truth value of "NOT P"?',
        options: [
          { id: 'opt1-logic-101-q2', text: 'True' },
          { id: 'opt2-logic-101-q2', text: 'False' },
        ],
        correctOptionId: 'opt2-logic-101-q2',
        explanation: 'The logical NOT operator inverts the truth value of its operand. If P is true, NOT P is false.'
      }
    ]
  },
  {
    id: 'quiz-numtheory-101',
    lessonId: 'math-numtheory-101',
    title: 'Number Theory Quiz',
    questions: [
      {
        id: 'q1-numtheory-101',
        text: 'Which of these numbers is a prime number?',
        options: [
          { id: 'opt1-numtheory-101-q1', text: '9' },
          { id: 'opt2-numtheory-101-q1', text: '17' },
          { id: 'opt3-numtheory-101-q1', text: '21' },
        ],
        correctOptionId: 'opt2-numtheory-101-q1',
        explanation: 'A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 17 is only divisible by 1 and 17.'
      }
    ]
  },
  {
    id: 'quiz-linalg-101',
    lessonId: 'math-linalg-101',
    title: 'Linear Algebra Quiz',
    questions: [
      {
        id: 'q1-linalg-101',
        text: 'What is the dimension of the vector [1, 2, 3]?',
        options: [
          { id: 'opt1-linalg-101-q1', text: '1' },
          { id: 'opt2-linalg-101-q1', text: '2' },
          { id: 'opt3-linalg-101-q1', text: '3' },
        ],
        correctOptionId: 'opt3-linalg-101-q1',
        explanation: 'The dimension of a vector is the number of components it has. This vector has 3 components.'
      }
    ]
  },
  {
    id: 'quiz-financial-101',
    lessonId: 'math-financial-101',
    title: 'Financial Math Quiz',
    questions: [
      {
        id: 'q1-financial-101',
        text: 'If you invest $100 at 5% simple interest per year, how much interest do you earn in 1 year?',
        options: [
          { id: 'opt1-financial-101-q1', text: '$1' },
          { id: 'opt2-financial-101-q1', text: '$5' },
          { id: 'opt3-financial-101-q1', text: '$10' },
        ],
        correctOptionId: 'opt2-financial-101-q1',
        explanation: 'Simple interest = Principal x Rate x Time. So, $100 x 0.05 x 1 = $5.'
      }
    ]
  },

  // Science Quizzes
  {
    id: 'quiz-phy-101',
    lessonId: 'sci-phy-101',
    title: 'Newton\'s Laws Quiz',
    questions: [
      {
        id: 'q1-phy-101',
        text: 'Which law is also known as the law of inertia?',
        options: [
          { id: 'opt1-phy-101-q1', text: 'First Law' },
          { id: 'opt2-phy-101-q1', text: 'Second Law' },
          { id: 'opt3-phy-101-q1', text: 'Third Law' },
        ],
        correctOptionId: 'opt1-phy-101-q1',
        explanation: 'Newton\'s First Law states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.'
      },
       {
        id: 'q2-phy-101',
        text: 'F = ma is the formula for which of Newton\'s laws?',
        options: [
          { id: 'opt1-phy-101-q2', text: 'First Law' },
          { id: 'opt2-phy-101-q2', text: 'Second Law' },
          { id: 'opt3-phy-101-q2', text: 'Third Law' },
        ],
        correctOptionId: 'opt2-phy-101-q2',
        explanation: 'Newton\'s Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass (F=ma).'
      },
    ],
  },
  {
    id: 'quiz-chem-101',
    lessonId: 'sci-chem-101',
    title: 'Chemical Reactions Quiz',
    questions: [
      {
        id: 'q1-chem-101',
        text: 'What is H2O commonly known as?',
        options: [
          { id: 'opt1-chem-101-q1', text: 'Salt' },
          { id: 'opt2-chem-101-q1', text: 'Sugar' },
          { id: 'opt3-chem-101-q1', text: 'Water' },
        ],
        correctOptionId: 'opt3-chem-101-q1',
        explanation: 'H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom.'
      },
      {
        id: 'q2-chem-101',
        text: 'What type of reaction occurs when an acid and a base react to form salt and water?',
        options: [
          { id: 'opt1-chem-101-q2', text: 'Combustion' },
          { id: 'opt2-chem-101-q2', text: 'Neutralization' },
          { id: 'opt3-chem-101-q2', text: 'Oxidation' },
        ],
        correctOptionId: 'opt2-chem-101-q2',
        explanation: 'A neutralization reaction is a chemical reaction in which an acid and a base react quantitatively with each other to produce a salt and water.'
      }
    ],
  },
  {
    id: 'quiz-bio-101',
    lessonId: 'sci-bio-101',
    title: 'Cell Biology Quiz',
    questions: [
      {
        id: 'q1-bio-101',
        text: 'What is the powerhouse of the cell?',
        options: [
          { id: 'opt1-bio-101-q1', text: 'Nucleus' },
          { id: 'opt2-bio-101-q1', text: 'Mitochondria' },
          { id: 'opt3-bio-101-q1', text: 'Ribosome' },
        ],
        correctOptionId: 'opt2-bio-101-q1',
        explanation: 'Mitochondria are responsible for generating most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
      },
      {
        id: 'q2-bio-101',
        text: 'Which organelle contains the cell\'s genetic material (DNA)?',
        options: [
          { id: 'opt1-bio-101-q2', text: 'Golgi apparatus' },
          { id: 'opt2-bio-101-q2', text: 'Endoplasmic reticulum' },
          { id: 'opt3-bio-101-q2', text: 'Nucleus' },
        ],
        correctOptionId: 'opt3-bio-101-q2',
        explanation: 'The nucleus is a membrane-bound organelle that contains the cell\'s chromosomes, which are made of DNA.'
      }
    ],
  },
  {
    id: 'quiz-eco-101',
    lessonId: 'sci-eco-101',
    title: 'Ecosystems Quiz',
    questions: [
      {
        id: 'q1-eco-101',
        text: 'Which of the following is a producer in an ecosystem?',
        options: [
          { id: 'opt1-eco-101-q1', text: 'Lion' },
          { id: 'opt2-eco-101-q1', text: 'Grass' },
          { id: 'opt3-eco-101-q1', text: 'Mushroom' },
        ],
        correctOptionId: 'opt2-eco-101-q1',
        explanation: 'Producers, like grass, create their own food through photosynthesis. Lions are consumers, and mushrooms are decomposers.'
      },
      {
        id: 'q2-eco-101',
        text: 'What is a biome?',
        options: [
          { id: 'opt1-eco-101-q2', text: 'A single species in an area' },
          { id: 'opt2-eco-101-q2', text: 'A large community of plants and animals occupying a major habitat' },
          { id: 'opt3-eco-101-q2', text: 'The interaction between two organisms' },
        ],
        correctOptionId: 'opt2-eco-101-q2',
        explanation: 'A biome is a large geographical area characterized by its vegetation, soil, climate, and wildlife.'
      }
    ],
  },
  {
    id: 'quiz-astro-101',
    lessonId: 'sci-astro-101',
    title: 'Solar System Quiz',
    questions: [
      {
        id: 'q1-astro-101',
        text: 'Which is the largest planet in our solar system?',
        options: [
          { id: 'opt1-astro-101-q1', text: 'Earth' },
          { id: 'opt2-astro-101-q1', text: 'Jupiter' },
          { id: 'opt3-astro-101-q1', text: 'Saturn' },
        ],
        correctOptionId: 'opt2-astro-101-q1',
        explanation: 'Jupiter is the largest planet in our solar system by a significant margin, both in terms of mass and volume.'
      },
      {
        id: 'q2-astro-101',
        text: 'What is the name of the star at the center of our Solar System?',
        options: [
          { id: 'opt1-astro-101-q2', text: 'Proxima Centauri' },
          { id: 'opt2-astro-101-q2', text: 'Sirius' },
          { id: 'opt3-astro-101-q2', text: 'Sun' },
        ],
        correctOptionId: 'opt3-astro-101-q2',
        explanation: 'The Sun is the star at the center of our Solar System, around which Earth and other planets orbit.'
      }
    ],
  },
  {
    id: 'quiz-genetics-101',
    lessonId: 'sci-genetics-101',
    title: 'Genetics Introduction Quiz',
    questions: [
      {
        id: 'q1-genetics-101',
        text: 'What molecule carries genetic information in most organisms?',
        options: [
          { id: 'opt1-genetics-101-q1', text: 'RNA' },
          { id: 'opt2-genetics-101-q1', text: 'Protein' },
          { id: 'opt3-genetics-101-q1', text: 'DNA' },
        ],
        correctOptionId: 'opt3-genetics-101-q1',
        explanation: 'Deoxyribonucleic acid (DNA) is the primary carrier of genetic information in humans and most other organisms.'
      }
    ]
  },
  {
    id: 'quiz-geology-101',
    lessonId: 'sci-geology-101',
    title: 'Geology Basics Quiz',
    questions: [
      {
        id: 'q1-geology-101',
        text: 'What are the three main types of rocks?',
        options: [
          { id: 'opt1-geology-101-q1', text: 'Hard, Soft, Medium' },
          { id: 'opt2-geology-101-q1', text: 'Igneous, Sedimentary, Metamorphic' },
          { id: 'opt3-geology-101-q1', text: 'Volcanic, Oceanic, Continental' },
        ],
        correctOptionId: 'opt2-geology-101-q1',
        explanation: 'The three main rock types are igneous (formed from magma/lava), sedimentary (formed from accumulated sediments), and metamorphic (formed by heat/pressure changing existing rocks).'
      }
    ]
  },
  {
    id: 'quiz-humanbody-101',
    lessonId: 'sci-humanbody-101',
    title: 'Human Anatomy Quiz',
    questions: [
      {
        id: 'q1-humanbody-101',
        text: 'Which organ is primarily responsible for pumping blood throughout the body?',
        options: [
          { id: 'opt1-humanbody-101-q1', text: 'Lungs' },
          { id: 'opt2-humanbody-101-q1', text: 'Brain' },
          { id: 'opt3-humanbody-101-q1', text: 'Heart' },
        ],
        correctOptionId: 'opt3-humanbody-101-q1',
        explanation: 'The heart is a muscular organ that pumps blood through the blood vessels of the circulatory system.'
      }
    ]
  },
  {
    id: 'quiz-envsci-101',
    lessonId: 'sci-envsci-101',
    title: 'Environmental Science Quiz',
    questions: [
      {
        id: 'q1-envsci-101',
        text: 'What is the greenhouse effect?',
        options: [
          { id: 'opt1-envsci-101-q1', text: 'A process that cools the Earth' },
          { id: 'opt2-envsci-101-q1', text: 'The trapping of the sun\'s warmth in a planet\'s lower atmosphere' },
          { id: 'opt3-envsci-101-q1', text: 'The increase in ocean acidity' },
        ],
        correctOptionId: 'opt2-envsci-101-q1',
        explanation: 'The greenhouse effect is a natural process that warms the Earth\'s surface. When the Sun’s energy reaches the Earth’s atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases.'
      }
    ]
  },
  {
    id: 'quiz-lightoptics-101',
    lessonId: 'sci-lightoptics-101',
    title: 'Light and Optics Quiz',
    questions: [
      {
        id: 'q1-lightoptics-101',
        text: 'What happens when light bounces off a smooth, shiny surface?',
        options: [
          { id: 'opt1-lightoptics-101-q1', text: 'Refraction' },
          { id: 'opt2-lightoptics-101-q1', text: 'Absorption' },
          { id: 'opt3-lightoptics-101-q1', text: 'Reflection' },
        ],
        correctOptionId: 'opt3-lightoptics-101-q1',
        explanation: 'Reflection is the bouncing back of light when it strikes a surface. Smooth, shiny surfaces (like mirrors) are good reflectors.'
      }
    ]
  },

  // English Quizzes
  {
    id: 'quiz-gram-101',
    lessonId: 'eng-gram-101',
    title: 'Tenses Quiz',
    questions: [
        {
            id: 'q1-gram-101',
            text: 'Which tense is used in: "She ___ (go) to the market yesterday"?',
            options: [
                {id: 'opt1-gram-101-q1', text: 'Goes'},
                {id: 'opt2-gram-101-q1', text: 'Went'},
                {id: 'opt3-gram-101-q1', text: 'Is going'},
                {id: 'opt4-gram-101-q1', text: 'Will go'},
            ],
            correctOptionId: 'opt2-gram-101-q1',
            explanation: 'The word "yesterday" indicates past tense, so "went" is correct.'
        },
        {
            id: 'q2-gram-101',
            text: 'Identify the future perfect tense: "By next year, I ___ (complete) my studies."',
            options: [
                {id: 'opt1-gram-101-q2', text: 'completed'},
                {id: 'opt2-gram-101-q2', text: 'will complete'},
                {id: 'opt3-gram-101-q2', text: 'will have completed'},
            ],
            correctOptionId: 'opt3-gram-101-q2',
            explanation: 'Future perfect tense (will have + past participle) is used for an action that will be completed before some other point in the future.'
        }
    ]
  },
  {
    id: 'quiz-vocab-101',
    lessonId: 'eng-vocab-101',
    title: 'Vocabulary Quiz',
    questions: [
        {
            id: 'q1-vocab-101',
            text: 'What is a synonym for "ubiquitous"?',
            options: [
                {id: 'opt1-vocab-101-q1', text: 'Rare'},
                {id: 'opt2-vocab-101-q1', text: 'Commonplace'},
                {id: 'opt3-vocab-101-q1', text: 'Hidden'},
            ],
            correctOptionId: 'opt2-vocab-101-q1',
            explanation: '"Ubiquitous" means appearing or found everywhere, so "commonplace" is a synonym.'
        },
        {
            id: 'q2-vocab-101',
            text: 'An "antonym" is a word that means the ___ of another word.',
            options: [
                {id: 'opt1-vocab-101-q2', text: 'same'},
                {id: 'opt2-vocab-101-q2', text: 'opposite'},
                {id: 'opt3-vocab-101-q2', text: 'origin'},
            ],
            correctOptionId: 'opt2-vocab-101-q2',
            explanation: 'An antonym is a word with the opposite meaning of another word (e.g., hot and cold).'
        }
    ]
  },
  {
    id: 'quiz-lit-101',
    lessonId: 'eng-lit-101',
    title: 'Shakespeare Quiz',
    questions: [
        {
            id: 'q1-lit-101',
            text: 'Which of these is a famous tragedy by Shakespeare?',
            options: [
                {id: 'opt1-lit-101-q1', text: 'A Midsummer Night\'s Dream'},
                {id: 'opt2-lit-101-q1', text: 'Hamlet'},
                {id: 'opt3-lit-101-q1', text: 'The Taming of the Shrew'},
            ],
            correctOptionId: 'opt2-lit-101-q1',
            explanation: '"Hamlet" is one of Shakespeare\'s most famous tragedies. The others are comedies.'
        },
        {
            id: 'q2-lit-101',
            text: 'What is a "soliloquy" in a play?',
            options: [
                {id: 'opt1-lit-101-q2', text: 'A conversation between two characters'},
                {id: 'opt2-lit-101-q2', text: 'A character speaking their thoughts aloud, usually alone on stage'},
                {id: 'opt3-lit-101-q2', text: 'The final speech of the play'},
            ],
            correctOptionId: 'opt2-lit-101-q2',
            explanation: 'A soliloquy is a dramatic device where a character speaks their innermost thoughts aloud, revealing them to the audience but not to other characters.'
        }
    ]
  },
  {
    id: 'quiz-writing-101',
    lessonId: 'eng-writing-101',
    title: 'Essay Writing Quiz',
    questions: [
        {
            id: 'q1-writing-101',
            text: 'What is the purpose of a thesis statement in an essay?',
            options: [
                {id: 'opt1-writing-101-q1', text: 'To summarize the entire essay'},
                {id: 'opt2-writing-101-q1', text: 'To present the main argument or point'},
                {id: 'opt3-writing-101-q1', text: 'To introduce the topic broadly'},
            ],
            correctOptionId: 'opt2-writing-101-q1',
            explanation: 'A thesis statement clearly presents the main argument or central point that the essay will explore and support.'
        }
    ]
  },
  {
    id: 'quiz-poetry-101',
    lessonId: 'eng-poetry-101',
    title: 'Poetic Devices Quiz',
    questions: [
        {
            id: 'q1-poetry-101',
            text: '"The wind whispered through the trees" is an example of:',
            options: [
                {id: 'opt1-poetry-101-q1', text: 'Metaphor'},
                {id: 'opt2-poetry-101-q1', text: 'Simile'},
                {id: 'opt3-poetry-101-q1', text: 'Personification'},
            ],
            correctOptionId: 'opt3-poetry-101-q1',
            explanation: 'Personification is giving human qualities (like whispering) to inanimate objects or abstract ideas (like the wind).'
        }
    ]
  },
   {
    id: 'quiz-speech-101',
    lessonId: 'eng-speech-101',
    title: 'Parts of Speech Quiz',
    questions: [
      {
        id: 'q1-speech-101',
        text: 'In the sentence "The quick brown fox jumps," what part of speech is "quick"?',
        options: [
          { id: 'opt1-speech-101-q1', text: 'Noun' },
          { id: 'opt2-speech-101-q1', text: 'Verb' },
          { id: 'opt3-speech-101-q1', text: 'Adjective' },
        ],
        correctOptionId: 'opt3-speech-101-q1',
        explanation: '"Quick" describes the noun "fox," making it an adjective.'
      }
    ]
  },
  {
    id: 'quiz-reading-101',
    lessonId: 'eng-reading-101',
    title: 'Reading Comprehension Quiz',
    questions: [
      {
        id: 'q1-reading-101',
        text: 'What is the main idea of a passage?',
        options: [
          { id: 'opt1-reading-101-q1', text: 'A supporting detail' },
          { id: 'opt2-reading-101-q1', text: 'The central point or message' },
          { id: 'opt3-reading-101-q1', text: 'The author\'s biography' },
        ],
        correctOptionId: 'opt2-reading-101-q1',
        explanation: 'The main idea is the most important thought or central message the author is trying to convey about the topic.'
      }
    ]
  },
  {
    id: 'quiz-punctuation-101',
    lessonId: 'eng-punctuation-101',
    title: 'Punctuation Quiz',
    questions: [
      {
        id: 'q1-punctuation-101',
        text: 'Which punctuation mark is used to indicate possession (e.g., the dog_s bone)?',
        options: [
          { id: 'opt1-punctuation-101-q1', text: 'Comma (,)' },
          { id: 'opt2-punctuation-101-q1', text: 'Apostrophe (\')' },
          { id: 'opt3-punctuation-101-q1', text: 'Semicolon (;)' },
        ],
        correctOptionId: 'opt2-punctuation-101-q1',
        explanation: 'An apostrophe is used to show possession (e.g., John\'s car, the cat\'s toy).'
      }
    ]
  },
  {
    id: 'quiz-publicspeaking-101',
    lessonId: 'eng-publicspeaking-101',
    title: 'Public Speaking Quiz',
    questions: [
      {
        id: 'q1-publicspeaking-101',
        text: 'What is an important aspect of maintaining audience engagement during a speech?',
        options: [
          { id: 'opt1-publicspeaking-101-q1', text: 'Reading directly from notes without looking up' },
          { id: 'opt2-publicspeaking-101-q1', text: 'Using a monotone voice' },
          { id: 'opt3-publicspeaking-101-q1', text: 'Making eye contact and varying vocal tone' },
        ],
        correctOptionId: 'opt3-publicspeaking-101-q1',
        explanation: 'Eye contact helps connect with the audience, and varying vocal tone keeps the speech interesting and engaging.'
      }
    ]
  },
  {
    id: 'quiz-figurativelang-101',
    lessonId: 'eng-figurativelang-101',
    title: 'Figurative Language Quiz',
    questions: [
      {
        id: 'q1-figurativelang-101',
        text: '"It\'s raining cats and dogs" is an example of what type of figurative language?',
        options: [
          { id: 'opt1-figurativelang-101-q1', text: 'Simile' },
          { id: 'opt2-figurativelang-101-q1', text: 'Metaphor' },
          { id: 'opt3-figurativelang-101-q1', text: 'Idiom' },
        ],
        correctOptionId: 'opt3-figurativelang-101-q1',
        explanation: 'An idiom is a phrase whose meaning cannot be understood from the literal meanings of its individual words. "Raining cats and dogs" means it\'s raining very heavily.'
      }
    ]
  },


  // History Quizzes
  {
    id: 'quiz-hist-ww1',
    lessonId: 'hist-ww1-101',
    title: 'World War I Causes Quiz',
    questions: [
        {
            id: 'q1-hist-ww1',
            text: 'Which event is often cited as the immediate trigger for World War I?',
            options: [
                {id: 'opt1-hist-ww1-q1', text: 'The sinking of the Lusitania'},
                {id: 'opt2-hist-ww1-q1', text: 'The assassination of Archduke Franz Ferdinand'},
                {id: 'opt3-hist-ww1-q1', text: 'The Battle of Verdun'},
            ],
            correctOptionId: 'opt2-hist-ww1-q1',
            explanation: 'The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on June 28, 1914, is widely considered the event that triggered the outbreak of World War I.'
        }
    ]
  },
  {
    id: 'quiz-hist-egypt',
    lessonId: 'hist-egypt-101',
    title: 'Ancient Egypt Quiz',
    questions: [
        {
            id: 'q1-hist-egypt',
            text: 'What was the primary purpose of the great pyramids in Egypt?',
            options: [
                {id: 'opt1-hist-egypt-q1', text: 'Astronomical observatories'},
                {id: 'opt2-hist-egypt-q1', text: 'Tombs for pharaohs'},
                {id: 'opt3-hist-egypt-q1', text: 'Public granaries'},
            ],
            correctOptionId: 'opt2-hist-egypt-q1',
            explanation: 'The great pyramids were built as elaborate tombs for the pharaohs and their consorts during the Old and Middle Kingdom periods.'
        }
    ]
  },
  {
    id: 'quiz-hist-rome',
    lessonId: 'hist-rome-101',
    title: 'Roman Empire Quiz',
    questions: [
        {
            id: 'q1-hist-rome',
            text: 'Who was the first Roman Emperor?',
            options: [
                {id: 'opt1-hist-rome-q1', text: 'Julius Caesar'},
                {id: 'opt2-hist-rome-q1', text: 'Augustus (Octavian)'},
                {id: 'opt3-hist-rome-q1', text: 'Nero'},
            ],
            correctOptionId: 'opt2-hist-rome-q1',
            explanation: 'Augustus (originally Octavian) is considered the first Roman Emperor, marking the end of the Roman Republic and the beginning of the Roman Empire.'
        }
    ]
  },
  {
    id: 'quiz-hist-renaissance',
    lessonId: 'hist-renaissance-101',
    title: 'Renaissance Quiz',
    questions: [
        {
            id: 'q1-hist-renaissance',
            text: 'The Renaissance is considered a "rebirth" of interest in the art and culture of which ancient civilizations?',
            options: [
                {id: 'opt1-hist-renaissance-q1', text: 'Ancient Egypt and Mesopotamia'},
                {id: 'opt2-hist-renaissance-q1', text: 'Ancient Greece and Rome'},
                {id: 'opt3-hist-renaissance-q1', text: 'The Mayan and Aztec civilizations'},
            ],
            correctOptionId: 'opt2-hist-renaissance-q1',
            explanation: 'The Renaissance was characterized by a renewed interest in the classical art, literature, and philosophy of ancient Greece and Rome.'
        }
    ]
  },
  {
    id: 'quiz-hist-civrights',
    lessonId: 'hist-civrights-101',
    title: 'Civil Rights Movement Quiz',
    questions: [
      {
        id: 'q1-hist-civrights',
        text: 'Who delivered the famous "I Have a Dream" speech?',
        options: [
          { id: 'opt1-hist-civrights-q1', text: 'Malcolm X' },
          { id: 'opt2-hist-civrights-q1', text: 'Rosa Parks' },
          { id: 'opt3-hist-civrights-q1', text: 'Martin Luther King Jr.' },
        ],
        correctOptionId: 'opt3-hist-civrights-q1',
        explanation: 'Martin Luther King Jr. delivered his iconic "I Have a Dream" speech during the March on Washington for Jobs and Freedom in 1963.'
      }
    ]
  },
  {
    id: 'quiz-hist-industrialrev',
    lessonId: 'hist-industrialrev-101',
    title: 'Industrial Revolution Quiz',
    questions: [
      {
        id: 'q1-hist-industrialrev',
        text: 'The Industrial Revolution began in which country?',
        options: [
          { id: 'opt1-hist-industrialrev-q1', text: 'United States' },
          { id: 'opt2-hist-industrialrev-q1', text: 'Great Britain' },
          { id: 'opt3-hist-industrialrev-q1', text: 'Germany' },
        ],
        correctOptionId: 'opt2-hist-industrialrev-q1',
        explanation: 'The Industrial Revolution began in Great Britain in the late 18th century, driven by innovations like the steam engine and mechanized textile production.'
      }
    ]
  },
  {
    id: 'quiz-hist-coldwar',
    lessonId: 'hist-coldwar-101',
    title: 'Cold War Quiz',
    questions: [
      {
        id: 'q1-hist-coldwar',
        text: 'The Cold War was primarily a conflict between which two superpowers?',
        options: [
          { id: 'opt1-hist-coldwar-q1', text: 'USA and China' },
          { id: 'opt2-hist-coldwar-q1', text: 'UK and France' },
          { id: 'opt3-hist-coldwar-q1', text: 'USA and Soviet Union' },
        ],
        correctOptionId: 'opt3-hist-coldwar-q1',
        explanation: 'The Cold War was a period of geopolitical tension between the United States and the Soviet Union and their respective allies, the Western Bloc and the Eastern Bloc.'
      }
    ]
  },
  {
    id: 'quiz-hist-exploration',
    lessonId: 'hist-exploration-101',
    title: 'Age of Exploration Quiz',
    questions: [
      {
        id: 'q1-hist-exploration',
        text: 'Which explorer is credited with the first circumnavigation of the Earth?',
        options: [
          { id: 'opt1-hist-exploration-q1', text: 'Christopher Columbus' },
          { id: 'opt2-hist-exploration-q1', text: 'Vasco da Gama' },
          { id: 'opt3-hist-exploration-q1', text: 'Ferdinand Magellan\'s expedition' },
        ],
        correctOptionId: 'opt3-hist-exploration-q1',
        explanation: 'While Magellan died en route, his expedition completed the first circumnavigation of the Earth.'
      }
    ]
  },
  {
    id: 'quiz-hist-ancientgreece',
    lessonId: 'hist-ancientgreece-101',
    title: 'Ancient Greece Quiz',
    questions: [
      {
        id: 'q1-hist-ancientgreece',
        text: 'Which city-state is known as the birthplace of democracy?',
        options: [
          { id: 'opt1-hist-ancientgreece-q1', text: 'Sparta' },
          { id: 'opt2-hist-ancientgreece-q1', text: 'Athens' },
          { id: 'opt3-hist-ancientgreece-q1', text: 'Corinth' },
        ],
        correctOptionId: 'opt2-hist-ancientgreece-q1',
        explanation: 'Athens is renowned for developing one of the earliest known democratic systems of government.'
      }
    ]
  },
  {
    id: 'quiz-hist-worldwar2',
    lessonId: 'hist-worldwar2-101',
    title: 'World War II Quiz',
    questions: [
      {
        id: 'q1-hist-worldwar2',
        text: 'The invasion of which country by Germany in 1939 is considered the start of World War II in Europe?',
        options: [
          { id: 'opt1-hist-worldwar2-q1', text: 'France' },
          { id: 'opt2-hist-worldwar2-q1', text: 'Poland' },
          { id: 'opt3-hist-worldwar2-q1', text: 'Soviet Union' },
        ],
        correctOptionId: 'opt2-hist-worldwar2-q1',
        explanation: 'Germany\'s invasion of Poland on September 1, 1939, prompted France and the United Kingdom to declare war on Germany, marking the beginning of World War II in Europe.'
      }
    ]
  },

  // Technology Quizzes
  {
    id: 'quiz-tech-coding-101',
    lessonId: 'tech-coding-101',
    title: 'Coding Basics Quiz',
    questions: [
      {
        id: 'q1-tech-coding-101',
        text: 'What does HTML stand for?',
        options: [
          { id: 'opt1-tech-coding-101-q1', text: 'HyperText Markup Language' },
          { id: 'opt2-tech-coding-101-q1', text: 'HighTech Machine Learning' },
          { id: 'opt3-tech-coding-101-q1', text: 'Home Tool Management Logic' },
        ],
        correctOptionId: 'opt1-tech-coding-101-q1',
        explanation: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.'
      }
    ]
  },
  {
    id: 'quiz-tech-ai-101',
    lessonId: 'tech-ai-101',
    title: 'AI Concepts Quiz',
    questions: [
      {
        id: 'q1-tech-ai-101',
        text: 'What is "Machine Learning"?',
        options: [
          { id: 'opt1-tech-ai-101-q1', text: 'A type of computer hardware' },
          { id: 'opt2-tech-ai-101-q1', text: 'A field of AI where systems learn from data' },
          { id: 'opt3-tech-ai-101-q1', text: 'A programming language' },
        ],
        correctOptionId: 'opt2-tech-ai-101-q1',
        explanation: 'Machine Learning is a subfield of Artificial Intelligence that enables systems to learn and improve from experience (data) without being explicitly programmed.'
      }
    ]
  },
  {
    id: 'quiz-tech-cybersecurity-101',
    lessonId: 'tech-cybersecurity-101',
    title: 'Cybersecurity Quiz',
    questions: [
      {
        id: 'q1-tech-cybersecurity-101',
        text: 'What is "phishing"?',
        options: [
          { id: 'opt1-tech-cybersecurity-101-q1', text: 'A type of fishing sport' },
          { id: 'opt2-tech-cybersecurity-101-q1', text: 'A secure way to store passwords' },
          { id: 'opt3-tech-cybersecurity-101-q1', text: 'Attempting to acquire sensitive information by masquerading as a trustworthy entity' },
        ],
        correctOptionId: 'opt3-tech-cybersecurity-101-q1',
        explanation: 'Phishing is a cybercrime where targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data such as personally identifiable information, banking and credit card details, and passwords.'
      }
    ]
  },
  {
    id: 'quiz-tech-datascience-101',
    lessonId: 'tech-datascience-101',
    title: 'Data Science Intro Quiz',
    questions: [
      {
        id: 'q1-tech-datascience-101',
        text: 'Which of these is a common task in data science?',
        options: [
          { id: 'opt1-tech-datascience-101-q1', text: 'Writing novels' },
          { id: 'opt2-tech-datascience-101-q1', text: 'Building physical robots' },
          { id: 'opt3-tech-datascience-101-q1', text: 'Analyzing data to find patterns and insights' },
        ],
        correctOptionId: 'opt3-tech-datascience-101-q1',
        explanation: 'Data science involves using scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.'
      }
    ]
  },
  {
    id: 'quiz-tech-webdev-101',
    lessonId: 'tech-webdev-101',
    title: 'Web Development Basics Quiz',
    questions: [
      {
        id: 'q1-tech-webdev-101',
        text: 'What is CSS primarily used for in web development?',
        options: [
          { id: 'opt1-tech-webdev-101-q1', text: 'Defining the structure of a webpage' },
          { id: 'opt2-tech-webdev-101-q1', text: 'Styling the visual presentation of a webpage' },
          { id: 'opt3-tech-webdev-101-q1', text: 'Handling server-side logic' },
        ],
        correctOptionId: 'opt2-tech-webdev-101-q1',
        explanation: 'CSS (Cascading Style Sheets) is used to describe the presentation of a document written in a markup language like HTML, including colors, layout, and fonts.'
      }
    ]
  },

  // Arts Quizzes
  {
    id: 'quiz-arts-drawing-101',
    lessonId: 'arts-drawing-101',
    title: 'Drawing Fundamentals Quiz',
    questions: [
      {
        id: 'q1-arts-drawing-101',
        text: 'What is "perspective" in drawing?',
        options: [
          { id: 'opt1-arts-drawing-101-q1', text: 'The type of paper used' },
          { id: 'opt2-arts-drawing-101-q1', text: 'The technique of creating an illusion of depth on a flat surface' },
          { id: 'opt3-arts-drawing-101-q1', text: 'The brightness of colors' },
        ],
        correctOptionId: 'opt2-arts-drawing-101-q1',
        explanation: 'Perspective is a system for creating an illusion of depth and three-dimensional space on a two-dimensional surface.'
      }
    ]
  },
  {
    id: 'quiz-arts-music-theory-101',
    lessonId: 'arts-music-theory-101',
    title: 'Music Theory Quiz',
    questions: [
      {
        id: 'q1-arts-music-theory-101',
        text: 'How many notes are typically in a major scale?',
        options: [
          { id: 'opt1-arts-music-theory-101-q1', text: '5' },
          { id: 'opt2-arts-music-theory-101-q1', text: '7' },
          { id: 'opt3-arts-music-theory-101-q1', text: '12' },
        ],
        correctOptionId: 'opt2-arts-music-theory-101-q1',
        explanation: 'A major scale consists of seven distinct notes, plus an eighth which duplicates the first an octave higher.'
      }
    ]
  },
  {
    id: 'quiz-arts-color-theory-101',
    lessonId: 'arts-color-theory-101',
    title: 'Color Theory Quiz',
    questions: [
      {
        id: 'q1-arts-color-theory-101',
        text: 'What are the three primary colors?',
        options: [
          { id: 'opt1-arts-color-theory-101-q1', text: 'Red, Yellow, Blue' },
          { id: 'opt2-arts-color-theory-101-q1', text: 'Green, Orange, Purple' },
          { id: 'opt3-arts-color-theory-101-q1', text: 'Black, White, Gray' },
        ],
        correctOptionId: 'opt1-arts-color-theory-101-q1',
        explanation: 'In traditional color theory (used in art and design), red, yellow, and blue are the primary colors because they cannot be created by mixing other colors.'
      }
    ]
  },
  {
    id: 'quiz-arts-photography-101',
    lessonId: 'arts-photography-101',
    title: 'Photography Composition Quiz',
    questions: [
      {
        id: 'q1-arts-photography-101',
        text: 'What is the "Rule of Thirds" in photography?',
        options: [
          { id: 'opt1-arts-photography-101-q1', text: 'Taking three photos of the same subject' },
          { id: 'opt2-arts-photography-101-q1', text: 'Dividing the frame into three equal horizontal sections' },
          { id: 'opt3-arts-photography-101-q1', text: 'Placing key elements along lines that divide the image into thirds, or at their intersections' },
        ],
        correctOptionId: 'opt3-arts-photography-101-q1',
        explanation: 'The rule of thirds is a compositional guideline that suggests an image should be imagined as divided into nine equal parts by two equally spaced horizontal lines and two equally spaced vertical lines, and that important compositional elements should be placed along these lines or their intersections.'
      }
    ]
  },
  {
    id: 'quiz-arts-arthistory-101',
    lessonId: 'arts-arthistory-101',
    title: 'Art Movements Quiz',
    questions: [
      {
        id: 'q1-arts-arthistory-101',
        text: 'Which art movement is characterized by its emphasis on light, color, and capturing a fleeting moment, often painted outdoors?',
        options: [
          { id: 'opt1-arts-arthistory-101-q1', text: 'Cubism' },
          { id: 'opt2-arts-arthistory-101-q1', text: 'Surrealism' },
          { id: 'opt3-arts-arthistory-101-q1', text: 'Impressionism' },
        ],
        correctOptionId: 'opt3-arts-arthistory-101-q1',
        explanation: 'Impressionism, which originated in the late 19th century, is known for its relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, and inclusion of movement as a crucial element of human perception and experience.'
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
