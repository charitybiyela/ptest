import { create } from 'zustand';
import { questions } from '../data/questions';
import { calculatePersonalityType } from '../utils/personalityCalculator';

interface TestState {
  selectedLanguage: string | null;
  testStarted: boolean;
  currentQuestion: number;
  questions: typeof questions;
  answers: (number | null)[];
  completed: boolean;
  personalityType: string;
  traits: Record<string, number>;
  dimensionScores?: Record<string, number>;
  setTestStarted: (started: boolean) => void;
  setAnswers: (answers: number[]) => void;
}

export const useTestStore = create<TestState>((set) => ({
  selectedLanguage: null,
  testStarted: false,
  currentQuestion: 0,
  questions,
  answers: new Array(questions.length).fill(null),
  completed: false,
  personalityType: '',
  traits: {
    Extraversion: 50,
    Sensing: 50,
    Thinking: 50,
    Judging: 50
  },
  setTestStarted: (started) => set({ testStarted: started }),
  setAnswers: (answers) => {
    try {
      const result = calculatePersonalityType(answers);
      set({ 
        answers,
        personalityType: result.personalityType,
        traits: result.traits,
        dimensionScores: result.dimensionScores,
        completed: true 
      });
    } catch (error) {
      console.error('Error calculating personality type:', error);
      // Handle error appropriately
    }
  }
}));