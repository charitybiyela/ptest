import React from 'react';
import { Heart } from 'lucide-react';
import { PersonalityType } from '../../../../types/personality';

interface MatchingTypesProps {
  data: PersonalityType;
}

export default function MatchingTypes({ data }: MatchingTypesProps) {
  return (
    <div className="bg-white/80 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-5 h-5 text-pink-500" />
        <h3 className="text-xl font-semibold text-gray-900">Best Matches</h3>
      </div>
      <div className="space-y-3">
        {data.relationships.bestMatches.map((match, index) => (
          <div 
            key={match}
            className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl"
          >
            <div className="font-semibold text-gray-900">{match}</div>
            <div className="text-sm text-gray-600">
              {index === 0 ? 'Perfect romantic match' : 
               index === 1 ? 'Ideal friendship' : 'Great work relationship'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}