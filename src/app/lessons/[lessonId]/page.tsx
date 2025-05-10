import { getLessonById, getQuizById, getCategoryById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MediaPlayer } from '@/components/shared/MediaPlayer';
import { PdfDisplay } from '@/components/shared/PdfDisplay';
import { QuizClient } from '@/components/shared/QuizClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { ArrowLeft, Video, FileText, Mic, HelpCircle, CheckCircle, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface LessonPageProps {
  params: {
    lessonId: string;
  };
  searchParams?: {
    tab?: string;
  };
}

export async function generateMetadata({ params }: LessonPageProps) {
  const lesson = getLessonById(params.lessonId);
  if (!lesson) {
    return { title: 'Lesson Not Found' };
  }
  const category = getCategoryById(lesson.categoryId);
  return {
    title: `${lesson.title} | ${category?.name || 'Lesson'} | Rural Scholar`,
    description: lesson.description || `Learn about ${lesson.title}.`,
  };
}

export default function LessonPage({ params, searchParams }: LessonPageProps) {
  const lesson = getLessonById(params.lessonId);

  if (!lesson) {
    notFound();
  }

  const quiz = lesson.quizId ? getQuizById(lesson.quizId) : undefined;
  const category = getCategoryById(lesson.categoryId);
  const defaultTab = searchParams?.tab || (lesson.videoUrl ? "video" : lesson.pdfUrl ? "pdf" : lesson.audioUrl ? "audio" : quiz ? "quiz" : "overview");

  const hasContent = lesson.videoUrl || lesson.pdfUrl || lesson.audioUrl || quiz;

  const generateDownloadFilename = (baseTitle: string, type: 'video' | 'pdf' | 'audio') => {
    const sanitizedTitle = baseTitle.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "_").toLowerCase();
    const extension = type === 'video' ? 'mp4' : type === 'pdf' ? 'pdf' : 'mp3';
    return `${sanitizedTitle}_${type}.${extension}`;
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          {category && (
             <Button variant="outline" size="sm" asChild className="mb-4">
                <Link href={`/categories/${category.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {category.name}
                </Link>
            </Button>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{lesson.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{lesson.description}</p>
          <div className="mt-3 flex items-center gap-4">
            {lesson.isCompleted ? (
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300 py-1 px-3 text-sm">
                <CheckCircle className="h-4 w-4 mr-1.5" />
                Completed
              </Badge>
            ) : (
              <Badge variant="outline" className="py-1 px-3 text-sm">
                In Progress
              </Badge>
            )}
             <span className="text-sm text-muted-foreground">Duration: {lesson.duration}</span>
          </div>
        </div>
      </div>

      {hasContent ? (
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6">
            {lesson.videoUrl && <TabsTrigger value="video" className="flex items-center gap-2"><Video className="h-4 w-4"/>Video</TabsTrigger>}
            {lesson.pdfUrl && <TabsTrigger value="pdf" className="flex items-center gap-2"><FileText className="h-4 w-4"/>Notes (PDF)</TabsTrigger>}
            {lesson.audioUrl && <TabsTrigger value="audio" className="flex items-center gap-2"><Mic className="h-4 w-4"/>Audio Summary</TabsTrigger>}
            {quiz && <TabsTrigger value="quiz" className="flex items-center gap-2"><HelpCircle className="h-4 w-4"/>Quiz</TabsTrigger>}
          </TabsList>

          {lesson.videoUrl && (
            <TabsContent value="video">
              <MediaPlayer type="video" src={lesson.videoUrl} title="Lesson Video" />
            </TabsContent>
          )}
          {lesson.pdfUrl && (
            <TabsContent value="pdf">
              <PdfDisplay src={lesson.pdfUrl} title="Lesson Notes" />
            </TabsContent>
          )}
          {lesson.audioUrl && (
            <TabsContent value="audio">
              <MediaPlayer type="audio" src={lesson.audioUrl} title="Audio Summary" />
            </TabsContent>
          )}
          {quiz && (
            <TabsContent value="quiz">
              <QuizClient quiz={quiz} />
            </TabsContent>
          )}
        </Tabs>
      ) : (
        <div className="text-center py-12 bg-card border rounded-lg shadow-sm">
          <Image src={lesson.thumbnailUrl} alt={lesson.title} width={400} height={225} className="mx-auto rounded-md mb-6 shadow-md" data-ai-hint="education learning"/>
          <p className="text-xl text-muted-foreground">No additional content available for this lesson yet.</p>
          <p className="text-sm text-muted-foreground mt-2">Check back later for videos, notes, or quizzes.</p>
        </div>
      )}

      <div className="mt-8 p-6 bg-card border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Offline Resources</h3>
        {(lesson.videoUrl || lesson.pdfUrl || lesson.audioUrl) ? (
          <div className="flex flex-wrap gap-3">
            {lesson.videoUrl && (
              <Button variant="outline" asChild>
                <a href={lesson.videoUrl} download={generateDownloadFilename(lesson.title, 'video')} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download Video
                </a>
              </Button>
            )}
            {lesson.pdfUrl && (
              <Button variant="outline" asChild>
                <a href={lesson.pdfUrl} download={generateDownloadFilename(lesson.title, 'pdf')} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download PDF Notes
                </a>
              </Button>
            )}
            {lesson.audioUrl && (
              <Button variant="outline" asChild>
                <a href={lesson.audioUrl} download={generateDownloadFilename(lesson.title, 'audio')} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download Audio
                </a>
              </Button>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No downloadable resources available for this lesson.</p>
        )}
      </div>
    </div>
  );
}
