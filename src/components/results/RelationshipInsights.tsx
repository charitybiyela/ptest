import React from 'react';
import { Heart, X } from 'lucide-react';

interface RelationshipInsightsProps {
  relationships: {
    strengths: string[];
    challenges: string[];
    bestMatches: string[];
  };
}

export default function RelationshipInsights({ relationships }: RelationshipInsightsProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-green-800">Relationship Strengths</h3>
          <ul className="space-y-2">
            {relationships.strengths.map((strength) => (
              <li key={strength} className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-600" />
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-red-800">Relationship Challenges</h3>
          <ul className="space-y-2">
            {relationships.challenges.map((challenge) => (
              <li key={challenge} className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-600" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-blue-800">Best Matches</h3>
        <div className="flex gap-4">
          {relationships.bestMatches.map((match) => (
            <div key={match} className="bg-white px-4 py-2 rounded-lg shadow-sm">
              {match}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}