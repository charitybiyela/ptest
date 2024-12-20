import React, { forwardRef } from 'react';
import { PersonalityType } from '../../../../types/personality';
import Background from './Background';
import Header from './Header';
import PersonalityInfo from './PersonalityInfo';
import MatchingTypes from './MatchingTypes';

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
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 overflow-hidden"
        style={{
          width: '1200px',
          height: '630px'
        }}
      >
        <Background />
        <div className="relative z-10 h-full flex flex-col">
          <Header userName={userName} />
          <div className="flex-1 flex gap-8">
            <div className="flex-1">
              <PersonalityInfo type={type} data={data} />
            </div>
            <div className="w-96">
              <MatchingTypes data={data} />
            </div>
          </div>
          <div className="mt-auto pt-6 flex justify-between text-sm text-gray-500">
            <span>Take the test at personality.ofsu.com</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    );
  }
);

ShareableImage.displayName = 'ShareableImage';

export default ShareableImage;