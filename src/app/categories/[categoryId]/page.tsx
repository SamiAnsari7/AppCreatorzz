import { getCategoryById, getLessonsByCategoryId } from '@/lib/data';
import { LessonCard } from '@/components/shared/LessonCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategoryById(params.categoryId);
  if (!category) {
    return { title: 'Category Not Found' };
  }
  return {
    title: `${category.name} | Rural Scholar`,
    description: `Browse lessons in ${category.name}. ${category.description}`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.categoryId);
  const lessons = getLessonsByCategoryId(params.categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <Button variant="outline" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary flex items-center">
            <category.icon className="mr-3 h-8 w-8 md:h-10 md:w-10" />
            {category.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {lessons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No lessons available in this category yet.</p>
          <Button asChild className="mt-4">
            <Link href="/">Explore other categories</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
