import Link from 'next/link';
import type { Category } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, BookCopy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = category.icon || BookCopy;
  return (
    <Link href={`/categories/${category.id}`} className="group block">
      <Card className={cn(
        "h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 overflow-hidden",
        `bg-gradient-to-br ${category.gradientClasses}`
      )}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-white">
          <CardTitle className="text-2xl font-bold">{category.name}</CardTitle>
          <IconComponent className="h-10 w-10 opacity-80" />
        </CardHeader>
        <CardContent className="text-white/90">
          <p className="text-sm mb-4">{category.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium">{category.lessonsCount} Lessons</span>
            <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
