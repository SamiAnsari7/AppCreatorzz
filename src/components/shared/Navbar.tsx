import Link from 'next/link';
import { BookHeart, Home, UserCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) => (
  <Link href={href} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-primary/10">
    <Icon className="h-5 w-5" />
    {children}
  </Link>
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <BookHeart className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Rural Scholar</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search subjects..." className="pl-10 w-64" />
          </div>
          <nav className="flex items-center gap-2">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/profile" icon={UserCircle}>Profile</NavLink>
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <BookHeart className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold text-primary">Rural Scholar</span>
                </Link>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search subjects..." className="pl-10 w-full" />
                </div>
                <NavLink href="/" icon={Home}>Home</NavLink>
                <NavLink href="/profile" icon={UserCircle}>Profile</NavLink>
                {/* Add more links if needed for mobile */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
