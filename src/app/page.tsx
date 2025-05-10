// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { LessonCard } from '@/components/shared/LessonCard';
import { MOCK_CATEGORIES, MOCK_LESSONS } from '@/lib/data';
import type { Category, Lesson } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>(MOCK_CATEGORIES);
  const [displayedLessons, setDisplayedLessons] = useState<Lesson[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    if (lowerCaseSearchTerm === '') {
      setDisplayedCategories(MOCK_CATEGORIES);
      setDisplayedLessons([]);
      setSearchPerformed(false);
      return;
    }

    setSearchPerformed(true);

    const filteredCategories = MOCK_CATEGORIES.filter(
      (category) =>
        category.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        category.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setDisplayedCategories(filteredCategories);

    const filteredLessons = MOCK_LESSONS.filter(
      (lesson) =>
        lesson.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        lesson.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setDisplayedLessons(filteredLessons);
  }, [searchTerm]);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Search is already live, but this handles explicit submission if desired
    // For this implementation, preventDefault is the main goal
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          Welcome to Rural Scholar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Unlock your potential with our engaging lessons and interactive quizzes, accessible anytime, anywhere.
        </p>
        <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for subjects, lessons..."
              className="w-full pl-10 pr-4 py-3 h-12 text-base rounded-md shadow-sm"
              aria-label="Search content"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12">
            <Search className="h-5 w-5 mr-2 md:hidden" />
            <span className="hidden md:inline">Search</span>
          </Button>
        </form>
      </section>

      {searchPerformed && displayedCategories.length === 0 && displayedLessons.length === 0 && (
        <section className="text-center py-10">
          <p className="text-xl text-muted-foreground mb-4">
            No results found for "{searchTerm}".
          </p>
          <Button onClick={() => setSearchTerm('')} variant="outline">
            Clear Search & View All Subjects
          </Button>
        </section>
      )}

      {(!searchPerformed || displayedCategories.length > 0) && (
        <section id="categories">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            {searchPerformed ? 'Matching Subjects' : 'Explore Our Subjects'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {searchPerformed && displayedLessons.length > 0 && (
        <section className="mt-12" id="lessons">
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            Matching Lessons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
