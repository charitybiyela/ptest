import React from 'react';
import { Brain } from 'lucide-react';

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-indigo-100 rounded-xl">
        <Brain className="w-8 h-8 text-indigo-600" />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          {userName}'s Personality Type
        </h1>
        <p className="text-lg text-gray-600">OFSU Personality Test Results</p>
      </div>
    </div>
  );
}