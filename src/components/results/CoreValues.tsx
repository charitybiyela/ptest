import React from 'react';
import { Star } from 'lucide-react';

interface CoreValuesProps {
  values: string[];
}

export default function CoreValues({ values }: CoreValuesProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Core Values</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {values.map((value) => (
          <div
            key={value}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg text-center"
          >
            <Star className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <h4 className="font-semibold">{value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}