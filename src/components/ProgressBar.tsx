import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  const characterVariants = {
    walk: {
      x: `${percentage}%`,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-indigo-700">Progress</span>
        <span className="text-sm font-medium text-indigo-700">{current}/{total}</span>
      </div>
      <div className="relative w-full bg-gray-200 rounded-full h-8">
        <div 
          className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-0"
          variants={characterVariants}
          animate="walk"
        >
          <div className="relative w-6 h-6">
            <span className="absolute text-2xl" role="img" aria-label="walking">
              🚶
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;