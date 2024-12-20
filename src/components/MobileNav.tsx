import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t"
        >
          <div className="space-y-4">
            <LanguageSelector />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;