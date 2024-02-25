export interface ApClass {
    id: string;
    name: string;
    scoreDistribution: ScoreDistributionItem[];
    difficulty: number;
    attributes: string[];
  }

export interface ScoreDistributionItem {
    score: number;
    percentage: number;
  }