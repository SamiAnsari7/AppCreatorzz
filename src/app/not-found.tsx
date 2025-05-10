import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
      <AlertTriangle className="w-24 h-24 text-accent mb-6" />
      <h1 className="text-5xl font-extrabold text-primary mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved or deleted.
      </p>
      <div className="space-x-4">
        <Button asChild size="lg">
          <Link href="/">Go Back Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/#categories">Explore Subjects</Link>
        </Button>
      </div>
    </div>
  );
}
