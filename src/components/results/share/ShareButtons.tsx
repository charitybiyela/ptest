import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  onDownload: () => void;
  onShare: () => void;
  disabled: boolean;
}

export default function ShareButtons({ onDownload, onShare, disabled }: ShareButtonsProps) {
  return (
    <div className="flex gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onDownload}
        disabled={disabled}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-5 h-5" />
        Download Image
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onShare}
        disabled={disabled}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Share2 className="w-5 h-5" />
        Share
      </motion.button>
    </div>
  );
}