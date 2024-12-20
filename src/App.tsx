import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, ChevronRight } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import MobileNav from './components/MobileNav';
import PersonalityTest from './components/PersonalityTest';
import PersonalityCard from './components/PersonalityCard';
import PersonalityModal from './components/PersonalityModal';
import { useTestStore } from './store/testStore';
import { personalityData } from './utils/personalityData';

function App() {
  const { t } = useTranslation();
  const { testStarted, setTestStarted } = useTestStore();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (testStarted) {
    return <PersonalityTest />;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-indigo-600" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">OFSU Personality Test</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <LanguageSelector />
              </div>
              <MobileNav 
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </header>
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {t('Free Personality Test')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">
              {t('Discover your personality type in just 12 minutes')}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTestStarted(true)}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('Start Test')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {Object.entries(personalityData).map(([type, data]) => (
                <PersonalityCard
                  key={type}
                  type={type}
                  data={data}
                  onInfoClick={() => setSelectedType(type)}
                />
              ))}
            </motion.div>

            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">12 Languages</h3>
                <p className="text-gray-600">Take the test in your preferred language</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">16 Personalities</h3>
                <p className="text-gray-600">Discover your unique personality type</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChevronRight className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick & Easy</h3>
                <p className="text-gray-600">Complete the test in just 12 minutes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {selectedType && personalityData[selectedType] && (
        <PersonalityModal
          type={selectedType}
          data={personalityData[selectedType]}
          onClose={() => setSelectedType(null)}
        />
      )}
    </div>
  );
}

export default App;