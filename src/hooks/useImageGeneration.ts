import { useState, useRef, useCallback } from 'react';
import { generateImage, ImageGenerationError } from '../utils/imageGeneration';

interface UseImageGenerationOptions {
  onSuccess?: (url: string) => void;
  onError?: (error: Error) => void;
}

export const useImageGeneration = (options: UseImageGenerationOptions = {}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const generate = useCallback(async () => {
    if (!elementRef.current) {
      const error = new Error('No element available for image generation');
      setError(error);
      options.onError?.(error);
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const dataUrl = await generateImage(elementRef.current);
      setImageUrl(dataUrl);
      options.onSuccess?.(dataUrl);
    } catch (err) {
      const error = err instanceof ImageGenerationError ? err : new ImageGenerationError(
        'Failed to generate image. Please try again.',
        err
      );
      setError(error);
      options.onError?.(error);
      setImageUrl(null);
    } finally {
      setIsGenerating(false);
    }
  }, [options]);

  const reset = useCallback(() => {
    setImageUrl(null);
    setError(null);
    setIsGenerating(false);
  }, []);

  return {
    elementRef,
    imageUrl,
    isGenerating,
    error,
    generate,
    reset
  };
};