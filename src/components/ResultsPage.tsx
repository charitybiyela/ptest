import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, BookOpen, Heart, Briefcase, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTestStore } from '../store/testStore';
import { getPersonalityData } from '../utils/personalityData';
import confetti from 'canvas-confetti';

import PersonalityOverview from './results/PersonalityOverview';
import RelationshipInsights from './results/RelationshipInsights';
import CareerSuggestions from './results/CareerSuggestions';
import CoreValues from './results/CoreValues';
import TabButton from './results/TabButton';
import ShareModal from './results/share/ShareModal';
import SpotifyPlayer from './results/SpotifyPlayer';

export default function ResultsPage() {
  const { t } = useTranslation();
  const { personalityType } = useTestStore();
  const [showShare, setShowShare] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  const personalityData = personalityType ? getPersonalityData(personalityType) : null;
  const SPOTIFY_PLAYLIST_ID = '40sCXQMmNuPfLmIHKPUGTO';

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#5850EC', '#6875F5', '#7E3AF2']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#5850EC', '#6875F5', '#7E3AF2']
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!personalityData) return null;

  const tabs = [
    { id: 'overview', label: t('Overview'), icon: BookOpen },
    { id: 'relationships', label: t('Relationships'), icon: Heart },
    { id: 'careers', label: t('Careers'), icon: Briefcase },
    { id: 'values', label: t('Core Values'), icon: Star }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* ... rest of the content ... */}
            
            <div className="mt-12 space-y-6">
              <div className="max-w-xl mx-auto">
                <SpotifyPlayer playlistId={SPOTIFY_PLAYLIST_ID} />
              </div>
              
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShare(true)}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Share2 className="w-5 h-5" />
                  {t('Share Your Results')}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showShare && personalityData && (
        <ShareModal
          onClose={() => setShowShare(false)}
          personalityType={personalityType}
          personalityData={personalityData}
        />
      )}
    </div>
  );
}