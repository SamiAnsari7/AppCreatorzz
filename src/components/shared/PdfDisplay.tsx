import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileTextIcon, ExternalLinkIcon } from 'lucide-react';

interface PdfDisplayProps {
  src: string;
  title: string;
}

export function PdfDisplay({ src, title }: PdfDisplayProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-muted/50">
        <CardTitle className="flex items-center text-lg">
          <FileTextIcon className="mr-2 h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <p className="text-muted-foreground mb-4">
          This lesson includes a PDF document. You can open it in a new tab.
        </p>
        <Button asChild variant="outline">
          <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open PDF document for ${title}`}>
            Open PDF
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
        {/* 
          For actual embedding (might have cross-origin issues or require a library for better UI):
          <iframe src={src} width="100%" height="500px" title={title} className="border rounded-md">
            Your browser does not support iframes. <a href={src}>Download PDF</a> instead.
          </iframe> 
        */}
      </CardContent>
    </Card>
  );
}
