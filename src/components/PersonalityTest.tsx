import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTestStore } from '../store/testStore';
import TestQuestion from './TestQuestion';
import ResultsPage from './ResultsPage';
import ProgressBar from './ProgressBar';

function PersonalityTest() {
  const { t } = useTranslation();
  const { currentQuestion, questions, answers, completed, setAnswers } = useTestStore();

  if (completed) {
    return <ResultsPage />;
  }

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    
    if (currentQuestion === questions.length - 1) {
      setAnswers(newAnswers);
    } else {
      useTestStore.setState({
        answers: newAnswers,
        currentQuestion: currentQuestion + 1
      });
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <ProgressBar 
          current={currentQuestion + 1} 
          total={questions.length} 
        />
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <span className="text-gray-500">
              {t('Question')} {currentQuestion + 1} {t('of')} {questions.length}
            </span>
          </div>

          <TestQuestion
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalityTest;