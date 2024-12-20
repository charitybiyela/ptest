import { toPng } from 'html-to-image';

interface Platform {
  name: string;
  width: number;
  height: number;
}

const PLATFORMS: Platform[] = [
  { name: 'facebook', width: 1200, height: 630 },
  { name: 'twitter', width: 1200, height: 675 },
  { name: 'linkedin', width: 1200, height: 627 },
  { name: 'instagram', width: 1080, height: 1080 }
];

export async function generateSocialImages(element: HTMLElement): Promise<Map<string, string>> {
  const images = new Map<string, string>();

  try {
    // Wait for fonts and animations
    await document.fonts.ready;
    await new Promise(resolve => setTimeout(resolve, 300));

    for (const platform of PLATFORMS) {
      const platformElement = element.querySelector(`[data-platform="${platform.name}"]`);
      if (!platformElement) continue;

      const dataUrl = await toPng(platformElement as HTMLElement, {
        quality: 0.95,
        width: platform.width,
        height: platform.height,
        pixelRatio: 2,
        skipAutoScale: true,
        cacheBust: true,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
          width: `${platform.width}px`,
          height: `${platform.height}px`
        }
      });

      images.set(platform.name, dataUrl);
    }

    return images;
  } catch (error) {
    console.error('Failed to generate social images:', error);
    throw new Error('Image generation failed. Please try again.');
  }
}