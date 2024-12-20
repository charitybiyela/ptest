import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Share2 } from 'lucide-react';
import { PersonalityType } from '../../types/personality';
import NameInputModal from './share/NameInputModal';
import SharePreview from './share/SharePreview';

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

  const handleNameSubmit = async (name: string) => {
    setUserName(name);
    setShowNameInput(false);
  };

  const handleShare = async () => {
    if (!imageUrl) return;

    try {
      if (navigator.share) {
        const blob = await (await fetch(imageUrl)).blob();
        const file = new File([blob], 'personality-result.png', { type: 'image/png' });
        
        await navigator.share({
          files: [file],
          title: 'My Personality Test Results',
          text: `I'm a ${personalityType} - ${personalityData.title}! Take the test to discover your personality type.`
        });
      } else {
        throw new Error('Native sharing not available');
      }
    } catch (error) {
      console.error('Sharing failed:', error);
      // Fallback to download if sharing fails
      handleDownload();
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

        <h3 className="text-2xl font-bold mb-6">Share Your Results</h3>

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

        <div className="flex gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            disabled={!imageUrl || isGenerating}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            Download Image
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            disabled={!imageUrl || isGenerating}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Share2 className="w-5 h-5" />
            Share
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}