import { toPng } from 'html-to-image';

interface ShareOptions {
  quality?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

const DEFAULT_OPTIONS: ShareOptions = {
  quality: 0.95,
  width: 1200,
  height: 630,
  backgroundColor: '#ffffff'
};

export const generateShareableImage = async (
  element: HTMLElement, 
  options: ShareOptions = DEFAULT_OPTIONS
): Promise<string> => {
  try {
    // Clone the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Set fixed dimensions for the image
    clone.style.width = `${options.width}px`;
    clone.style.height = `${options.height}px`;
    
    const dataUrl = await toPng(clone, {
      quality: options.quality,
      width: options.width,
      height: options.height,
      backgroundColor: options.backgroundColor,
      style: {
        fontKerning: 'normal',
        textRendering: 'optimizeLegibility'
      }
    });
    
    return dataUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate shareable image');
  }
};

export const downloadImage = (dataUrl: string, fileName: string) => {
  try {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading image:', error);
    throw new Error('Failed to download image');
  }
};

export const shareImage = async (dataUrl: string) => {
  try {
    if (navigator.share) {
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'personality-result.png', { type: 'image/png' });
      
      await navigator.share({
        files: [file],
        title: 'My Personality Test Results',
        text: 'Check out my personality type!'
      });
    } else {
      // Fallback to download if native sharing is not available
      downloadImage(dataUrl, 'personality-result.png');
    }
  } catch (error) {
    console.error('Error sharing:', error);
    throw new Error('Failed to share image');
  }
};