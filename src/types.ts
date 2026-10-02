export interface BrainExplanation {
  id: string;
  question: string;
  category: 'social' | 'emotions' | 'habits' | 'family' | 'identity';
  title: string;
  primaryBrainPart: string;
  brainMetaphor: string;
  relatableReality: string;
  brainBiologyHack: string;
  whyWeDoIt: string;
  takeaway: string;
  brainCheatCode: string;
  tags: string[];
}

export interface BrainRegion {
  id: string;
  name: string;
  nickname: string;
  metaphor: string;
  status: string;
  role: string;
  teenSuperpower: string;
  teenGlitch: string;
  relatedBehaviors: string[];
  color: string;
}
