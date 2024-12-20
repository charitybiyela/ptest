import React from 'react';
import { Briefcase } from 'lucide-react';

interface CareerSuggestionsProps {
  careers: string[];
}

export default function CareerSuggestions({ careers }: CareerSuggestionsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Recommended Careers</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {careers.map((career) => (
          <div
            key={career}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <Briefcase className="w-5 h-5 text-indigo-600 mb-2" />
            <h4 className="font-semibold">{career}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}