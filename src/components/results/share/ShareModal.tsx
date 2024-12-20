import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { PersonalityType } from '../../../types/personality';
import { shareToSocialMedia, copyToClipboard } from '../../../utils/share';
import NameInputModal from './NameInputModal';
import SharePreview from './SharePreview';
import ShareButtons from './ShareButtons';
import SocialButtons from './SocialButtons';

interface ShareModalProps {
  onClose: () => void;
  personalityType: string;
  personalityData: PersonalityType;
}

export default function ShareModal({ onClose, personalityType, personalityData }: ShareModalProps) {
  const [showNameInput, setShowNameInput] = useState(true);
  const [userName, setUserName] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleNameSubmit = async (name: string) => {
    setUserName(name);
    setShowNameInput(false);
  };

  const handleShare = async (platform?: string) => {
    if (!imageUrl) return;

    try {
      const text = `I'm a ${personalityType} - ${personalityData.title}! Take the test to discover your personality type.`;
      const url = window.location.href;

      if (platform === 'copy') {
        const success = await copyToClipboard(url);
        if (success) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          throw new Error('Failed to copy to clipboard');
        }
      } else if (platform) {
        shareToSocialMedia(platform, url, text);
      } else if (navigator.share) {
        const blob = await (await fetch(imageUrl)).blob();
        const file = new File([blob], 'personality-result.png', { type: 'image/png' });
        await navigator.share({
          files: [file],
          title: 'My Personality Test Results',
          text
        });
      } else {
        handleDownload();
      }
    } catch (error) {
      console.error('Sharing failed:', error);
      setError('Failed to share. Please try another method.');
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;

    const link = document.createElement('a');
    link.download = `${userName}-personality-type.png`;
    link.href = imageUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (showNameInput) {
    return (
      <NameInputModal
        onSubmit={handleNameSubmit}
        onClose={onClose}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-6 max-w-5xl w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold mb-2">Share Your Results</h3>
        <p className="text-gray-600 mb-6">Show the world your personality type!</p>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <SharePreview
          type={personalityType}
          data={personalityData}
          userName={userName}
          onImageGenerated={setImageUrl}
          isGenerating={isGenerating}
          setIsGenerating={setIsGenerating}
          setError={setError}
        />

        <div className="mt-6 space-y-4">
          <ShareButtons
            onDownload={handleDownload}
            onShare={() => handleShare()}
            disabled={!imageUrl || isGenerating}
          />
          <SocialButtons
            onShare={handleShare}
            copied={copied}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}