interface ShareOptions {
  platform: string;
  imageUrl: string;
  text: string;
  url: string;
}

export async function shareToSocial({ platform, imageUrl, text, url }: ShareOptions): Promise<void> {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  if (platform in shareUrls) {
    // For native sharing on mobile
    if (navigator.share) {
      try {
        const blob = await (await fetch(imageUrl)).blob();
        const file = new File([blob], 'personality-result.png', { type: 'image/png' });
        await navigator.share({
          files: [file],
          title: 'My Personality Test Results',
          text,
          url
        });
        return;
      } catch (error) {
        console.error('Native sharing failed:', error);
      }
    }

    // Fallback to URL sharing
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  }
}