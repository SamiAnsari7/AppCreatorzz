export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Rural Scholar. All rights reserved.</p>
        <p className="text-sm mt-1">Empowering rural students through accessible education.</p>
      </div>
    </footer>
  );
}
