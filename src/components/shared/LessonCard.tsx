import Link from 'next/link';
import Image from 'next/image';
import type { Lesson } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Download, PlayCircle, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col h-full">
      <CardHeader className="p-0">
        <Link href={`/lessons/${lesson.id}`} className="block">
          <Image
            src={lesson.thumbnailUrl}
            alt={lesson.title}
            width={400}
            height={225}
            className="w-full h-48 object-cover"
            data-ai-hint="education learning"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/lessons/${lesson.id}`}>
          <CardTitle className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
            {lesson.title}
          </CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{lesson.description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
            {lesson.isCompleted ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300">
                    <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                    Completed
                </Badge>
            ) : (
                 <Badge variant="outline">
                    <Circle className="h-3.5 w-3.5 mr-1.5" />
                    In Progress
                </Badge>
            )}
            <span className="font-medium">{lesson.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex items-center justify-between w-full gap-2">
           <Button variant="outline" size="sm" asChild className="flex-1">
            <Link href={`/lessons/${lesson.id}`}>
              <BookOpen className="h-4 w-4 mr-2" />
              View Lesson
            </Link>
          </Button>
          {lesson.quizId && (
            <Button variant="default" size="sm" asChild className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={`/lessons/${lesson.id}?tab=quiz`}> {/* Or link to separate quiz page */}
                <PlayCircle className="h-4 w-4 mr-2" />
                Start Quiz
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
