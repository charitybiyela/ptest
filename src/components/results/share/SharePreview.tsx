import React, { useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import ShareableImage from './ShareableImage';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

interface SharePreviewProps {
  type: string;
  data: any;
  userName: string;
  onImageGenerated: (url: string | null) => void;
  setIsGenerating: (generating: boolean) => void;
  setError: (error: string | null) => void;
}

export default function SharePreview({
  type,
  data,
  userName,
  onImageGenerated,
  setIsGenerating,
  setError
}: SharePreviewProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [generationError, setGenerationError] = React.useState<string | null>(null);

  const generateImage = async () => {
    if (!elementRef.current) return;

    setIsLoading(true);
    setIsGenerating(true);
    setGenerationError(null);

    try {
      await document.fonts.ready;
      await new Promise(resolve => setTimeout(resolve, 500));

      const dataUrl = await toPng(elementRef.current, {
        quality: 0.95,
        width: 1200,
        height: 630,
        pixelRatio: 2,
        skipAutoScale: true,
        cacheBust: true,
        filter: (node) => {
          // Skip preview wrapper elements
          const element = node as HTMLElement;
          return !element.classList?.contains('preview-wrapper');
        }
      });

      onImageGenerated(dataUrl);
      setError(null);
    } catch (err) {
      const errorMessage = 'Failed to generate image. Please try again.';
      setGenerationError(errorMessage);
      setError(errorMessage);
      onImageGenerated(null);
      console.error('Image generation failed:', err);
    } finally {
      setIsLoading(false);
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, [userName]);

  return (
    <div className="preview-wrapper bg-gray-50 p-4 rounded-xl overflow-hidden shadow-inner relative min-h-[300px]">
      <div className="preview-wrapper relative w-full aspect-[1200/630]">
        <ShareableImage
          ref={elementRef}
          type={type}
          data={data}
          userName={userName}
        />
      </div>
      
      {isLoading && <LoadingSpinner />}
      
      {generationError && (
        <ErrorMessage 
          message={generationError}
          onRetry={generateImage}
        />
      )}
    </div>
  );
}