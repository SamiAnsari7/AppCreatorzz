import { CategoryCard } from '@/components/shared/CategoryCard';
import { MOCK_CATEGORIES } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
          Welcome to Rural Scholar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Unlock your potential with our engaging lessons and interactive quizzes, accessible anytime, anywhere.
        </p>
        <div className="max-w-xl mx-auto flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for subjects, lessons..."
              className="w-full pl-10 pr-4 py-3 h-12 text-base rounded-md shadow-sm"
              aria-label="Search content"
            />
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12">
            <Search className="h-5 w-5 mr-2 md:hidden" />
            <span className="hidden md:inline">Search</span>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
          Explore Our Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
