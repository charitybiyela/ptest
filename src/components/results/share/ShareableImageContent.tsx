import React from 'react';
import { PersonalityType } from '../../../types/personality';

interface ShareableImageContentProps {
  type: string;
  data: PersonalityType;
  userName: string;
}

export default function ShareableImageContent({ type, data, userName }: ShareableImageContentProps) {
  return (
    <div className="relative z-10 h-full flex gap-8">
      <div className="w-1/2">
        <img
          src={data.imageUrl}
          alt={`${type} - ${data.title}`}
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {userName}'s Personality Type
        </h1>
        <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
          {type} - {data.title}
        </h2>
      </div>

      <div className="w-1/2 bg-white/80 rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Matches</h3>
        <div className="grid grid-cols-2 gap-4">
          {data.relationships.bestMatches.map((match, index) => (
            <div 
              key={match}
              className="bg-indigo-50 p-4 rounded-xl"
            >
              <span className="text-xl font-semibold text-indigo-700">
                {match}
              </span>
              <p className="text-gray-600 mt-2">
                Perfect for {index === 0 ? 'romantic' : index === 1 ? 'friendship' : 'work'} relationships
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Traits</h3>
          <div className="flex flex-wrap gap-2">
            {data.coreValues.slice(0, 4).map((value) => (
              <span
                key={value}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}