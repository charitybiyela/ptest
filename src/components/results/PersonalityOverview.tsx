import React from 'react';
import { useTestStore } from '../../store/testStore';
import { BookOpen } from 'lucide-react';

interface PersonalityOverviewProps {
  overview: {
    strengths: string[];
    weaknesses: string[];
    workStyle: string;
    communicationStyle: string;
  };
}

export default function PersonalityOverview({ overview }: PersonalityOverviewProps) {
  const { traits, dimensionScores } = useTestStore();

  return (
    <div className="space-y-6">
      {dimensionScores && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Extraversion - Introversion</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${dimensionScores.EI}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-600">
              <span>Introversion</span>
              <span>Extraversion</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Sensing - Intuition</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-600 h-2.5 rounded-full" 
                style={{ width: `${dimensionScores.SN}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-600">
              <span>Intuition</span>
              <span>Sensing</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Thinking - Feeling</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-purple-600 h-2.5 rounded-full" 
                style={{ width: `${dimensionScores.TF}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-600">
              <span>Feeling</span>
              <span>Thinking</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Judging - Perceiving</h4>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-orange-600 h-2.5 rounded-full" 
                style={{ width: `${dimensionScores.JP}%` }}
              />
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-600">
              <span>Perceiving</span>
              <span>Judging</span>
            </div>
          </div>
        </div>
      )}

      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold mb-4">Strengths</h3>
        <ul className="list-disc pl-5">
          {overview.strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-4">Areas for Growth</h3>
        <ul className="list-disc pl-5">
          {overview.weaknesses.map((weakness) => (
            <li key={weakness}>{weakness}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-4">Work Style</h3>
        <p>{overview.workStyle}</p>

        <h3 className="text-2xl font-bold mt-6 mb-4">Communication Style</h3>
        <p>{overview.communicationStyle}</p>
      </div>
    </div>
  );
}