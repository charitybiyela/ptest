import { toPng } from 'html-to-image';

interface ImageGenerationOptions {
  quality?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  scale?: number;
}

const DEFAULT_OPTIONS: Required<ImageGenerationOptions> = {
  quality: 0.95,
  width: 1200,
  height: 630,
  backgroundColor: '#ffffff',
  scale: 2
};

export class ImageGenerationError extends Error {
  constructor(message: string, public readonly originalError?: unknown) {
    super(message);
    this.name = 'ImageGenerationError';
  }
}

export const generateImage = async (
  element: HTMLElement, 
  customOptions: ImageGenerationOptions = {}
): Promise<string> => {
  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  
  try {
    // Wait for any web fonts to load
    await document.fonts.ready;
    
    // Add a small delay to ensure all styles are applied
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const dataUrl = await toPng(element, {
      quality: options.quality,
      width: options.width,
      height: options.height,
      backgroundColor: options.backgroundColor,
      pixelRatio: options.scale,
      skipAutoScale: true,
      cacheBust: true, // Prevent caching issues
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
        width: `${options.width}px`,
        height: `${options.height}px`
      },
      filter: (node) => {
        // Filter out any problematic elements
        const element = node as HTMLElement;
        return !element.classList?.contains('no-export');
      }
    });
    
    return dataUrl;
  } catch (error) {
    console.error('Image generation failed:', error);
    throw new ImageGenerationError(
      'Failed to generate image. Please try again.',
      error
    );
  }
};