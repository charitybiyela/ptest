import React from 'react';
import { motion } from 'framer-motion';
import { Info, Star } from 'lucide-react';
import { PersonalityType } from '../types/personality';
import ResponsiveImage from './common/ResponsiveImage';

interface PersonalityCardProps {
  type: string;
  data: PersonalityType;
  onInfoClick: (type: string) => void;
}

const PersonalityCard: React.FC<PersonalityCardProps> = ({ type, data, onInfoClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all group"
    >
      <ResponsiveImage
        src={data.imageUrl}
        alt={`${type} - ${data.title}`}
        aspectRatio="portrait"
        className="mb-4 transform group-hover:scale-105 transition-transform duration-300"
        priority={type === "INTJ"} // Prioritize loading for first card
      />
      
      <h3 className="text-lg md:text-xl font-bold mb-2">{type} - {data.title}</h3>
      <p className="text-sm md:text-base text-gray-600 line-clamp-3 mb-4">{data.description}</p>
      
      <div className="grid grid-cols-2 gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onInfoClick(type)}
          className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm md:text-base"
        >
          <Info className="w-4 h-4" />
          <span>Details</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm md:text-base"
        >
          <Star className="w-4 h-4" />
          <span>Traits</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default PersonalityCard;