import React from 'react';
import { Star } from 'lucide-react';
import { PersonalityType } from '../../../../types/personality';

interface PersonalityInfoProps {
  type: string;
  data: PersonalityType;
}

export default function PersonalityInfo({ type, data }: PersonalityInfoProps) {
  return (
    <div className="bg-white/80 rounded-2xl p-8 shadow-xl mb-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-indigo-600">{type}</h2>
          <h3 className="text-2xl font-semibold text-gray-800">{data.title}</h3>
        </div>
        <div className="px-4 py-2 bg-indigo-100 rounded-lg">
          <span className="font-semibold text-indigo-700">
            {Math.round(Math.random() * 15 + 85)}% Match
          </span>
        </div>
      </div>
      <p className="text-xl text-gray-600 mb-6 line-clamp-2">
        {data.description}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {data.overview.strengths.slice(0, 4).map((strength) => (
          <div key={strength} className="flex items-center gap-2 text-gray-700">
            <Star className="w-4 h-4 text-indigo-500" />
            <span>{strength}</span>
          </div>
        ))}
      </div>
    </div>
  );
}