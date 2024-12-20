import React, { forwardRef } from 'react';
import { PersonalityType } from '../../../types/personality';
import { Brain, Heart, Star } from 'lucide-react';

interface ShareableImageProps {
  type: string;
  data: PersonalityType;
  userName: string;
}

const ShareableImage = forwardRef<HTMLDivElement, ShareableImageProps>(
  ({ type, data, userName }, ref) => {
    return (
      <div 
        ref={ref}
        className="w-[1200px] h-[630px] bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-12 flex flex-col"
        style={{ 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="relative z-10 flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Brain className="w-12 h-12 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              {userName}'s Personality Type
            </h1>
          </div>

          {/* Main content */}
          <div className="flex gap-12">
            {/* Left column */}
            <div className="flex-1">
              <div className="bg-white/80 rounded-2xl p-8 shadow-xl mb-6">
                <h2 className="text-3xl font-bold text-indigo-600 mb-2">
                  {type} - {data.title}
                </h2>
                <p className="text-xl text-gray-600 line-clamp-2">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {data.overview.strengths.slice(0, 4).map((strength) => (
                  <div 
                    key={strength}
                    className="bg-indigo-50/80 p-4 rounded-xl"
                  >
                    <Star className="w-5 h-5 text-indigo-600 mb-2" />
                    <p className="font-medium text-indigo-900">{strength}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <div className="bg-white/80 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Best Matches
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.relationships.bestMatches.map((match) => (
                    <div 
                      key={match}
                      className="bg-purple-50/80 p-4 rounded-xl"
                    >
                      <span className="text-xl font-semibold text-purple-700">
                        {match}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto pt-6 flex justify-between items-end text-gray-400 text-sm">
          <span>OFSU Personality Test</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    );
  }
);

ShareableImage.displayName = 'ShareableImage';

export default ShareableImage;