import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Heart, Star, Users } from 'lucide-react';
import { PersonalityType } from '../types/personality';
import ResponsiveImage from './common/ResponsiveImage';

interface PersonalityModalProps {
  type: string;
  data: PersonalityType;
  onClose: () => void;
}

const PersonalityModal: React.FC<PersonalityModalProps> = ({ type, data, onClose }) => {
  return (
    <AnimatePresence>
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
          className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">{type} - {data.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <ResponsiveImage
            src={data.imageUrl}
            alt={`${type} - ${data.title}`}
            aspectRatio="video"
            className="w-full mb-6"
          />

          <div className="space-y-6">
            {/* Rest of the modal content */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PersonalityModal;