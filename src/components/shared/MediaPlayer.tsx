'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VideoIcon, MicIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface MediaPlayerProps {
  type: 'video' | 'audio';
  src: string;
  title: string;
}

export function MediaPlayer({ type, src, title }: MediaPlayerProps) {
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  useEffect(() => {
    // Potential for custom controls or event listeners in the future
    const mediaElement = mediaRef.current;
    if (mediaElement) {
      // Example: Log when media ends
      const handleEnded = () => console.log(`${title} finished playing.`);
      mediaElement.addEventListener('ended', handleEnded);
      return () => mediaElement.removeEventListener('ended', handleEnded);
    }
  }, [title]);
  
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="bg-muted/50">
        <CardTitle className="flex items-center text-lg">
          {type === 'video' ? <VideoIcon className="mr-2 h-5 w-5 text-primary" /> : <MicIcon className="mr-2 h-5 w-5 text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {type === 'video' ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={src}
            controls
            className="w-full aspect-video"
            aria-label={`Video player for ${title}`}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <audio
            ref={mediaRef as React.RefObject<HTMLAudioElement>}
            src={src}
            controls
            className="w-full p-4"
            aria-label={`Audio player for ${title}`}
          >
            Your browser does not support the audio tag.
          </audio>
        )}
      </CardContent>
    </Card>
  );
}
