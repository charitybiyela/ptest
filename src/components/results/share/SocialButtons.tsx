import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Link2 } from 'lucide-react';

interface SocialButtonsProps {
  onShare: (platform: string) => void;
  copied: boolean;
}

export default function SocialButtons({ onShare, copied }: SocialButtonsProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-gray-700">Or share on social media:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShare('facebook')}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Facebook className="w-5 h-5" />
          Facebook
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShare('twitter')}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
        >
          <Twitter className="w-5 h-5" />
          Twitter
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShare('copy')}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Link2 className="w-5 h-5" />
          {copied ? 'Copied!' : 'Copy Link'}
        </motion.button>
      </div>
    </div>
  );
}