import { questions } from '../data/questions';

interface TraitScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

interface DimensionScores {
  EI: number;
  SN: number;
  TF: number;
  JP: number;
}

interface CalculationResult {
  personalityType: string;
  traits: {
    Extraversion: number;
    Sensing: number;
    Thinking: number;
    Judging: number;
  };
  dimensionScores: DimensionScores;
}

function initializeTraitScores(): TraitScores {
  return {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };
}

function calculateTraitScores(answers: (number | null)[]): TraitScores {
  const scores = initializeTraitScores();
  
  answers.forEach((answer, index) => {
    if (answer === null || !questions[index]) return;

    const trait = questions[index].trait;
    const value = Math.abs(answer);

    switch (trait) {
      case 'EI':
        answer > 0 ? scores.E += value : scores.I += value;
        break;
      case 'SN':
        answer > 0 ? scores.S += value : scores.N += value;
        break;
      case 'TF':
        answer > 0 ? scores.T += value : scores.F += value;
        break;
      case 'JP':
        answer > 0 ? scores.J += value : scores.P += value;
        break;
    }
  });

  return scores;
}

function calculateDimensionPercentages(scores: TraitScores): DimensionScores {
  const calculatePercentage = (a: number, b: number): number => {
    const total = a + b;
    return total === 0 ? 50 : Math.round((a / total) * 100);
  };

  return {
    EI: calculatePercentage(scores.E, scores.I),
    SN: calculatePercentage(scores.S, scores.N),
    TF: calculatePercentage(scores.T, scores.F),
    JP: calculatePercentage(scores.J, scores.P)
  };
}

function determinePersonalityType(scores: TraitScores): string {
  return [
    scores.E > scores.I ? 'E' : 'I',
    scores.S > scores.N ? 'S' : 'N',
    scores.T > scores.F ? 'T' : 'F',
    scores.J > scores.P ? 'J' : 'P'
  ].join('');
}

export function calculatePersonalityType(answers: (number | null)[]): CalculationResult {
  // Validate that we have enough answers
  const validAnswers = answers.filter(answer => answer !== null);
  if (validAnswers.length === 0) {
    throw new Error('No valid answers provided');
  }

  const scores = calculateTraitScores(answers);
  const dimensionScores = calculateDimensionPercentages(scores);
  const personalityType = determinePersonalityType(scores);

  return {
    personalityType,
    traits: {
      Extraversion: dimensionScores.EI,
      Sensing: dimensionScores.SN,
      Thinking: dimensionScores.TF,
      Judging: dimensionScores.JP
    },
    dimensionScores
  };
}