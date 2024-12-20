export interface PersonalityType {
  title: string;
  description: string;
  imageUrl: string;
  careers: string[];
  relationships: {
    strengths: string[];
    challenges: string[];
    bestMatches: string[];
  };
  coreValues: string[];
  overview: {
    strengths: string[];
    weaknesses: string[];
    workStyle: string;
    communicationStyle: string;
    growthAreas: string[];
  };
}