import React from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

function AuthButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <LogIn className="w-5 h-5" />
      <span>Sign In</span>
    </motion.button>
  );
}

export default AuthButton;