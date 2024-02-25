import { Injectable, NotFoundException } from '@nestjs/common';

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

@Injectable()
export class ApClassesService {
  private readonly apClasses: ApClass[] = [
    {
      id: '1',
      name: 'AP Art History',
      scoreDistribution: [
        { score: 5, percentage: 13.8 },
        { score: 4, percentage: 23.8 },
        { score: 3, percentage: 27 },
        { score: 2, percentage: 23.8 },
        { score: 1, percentage: 11.6 },
      ],
      difficulty: 3,
      attributes: ['Historical Perspectives', 'Cultural Awareness'],
    },
    {
      id: '2',
      name: 'AP Biology',
      scoreDistribution: [
        { score: 5, percentage: 14.3 },
        { score: 4, percentage: 23 },
        { score: 3, percentage: 27.2 },
        { score: 2, percentage: 23.6 },
        { score: 1, percentage: 12 },
      ],
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation'],
    },
    {
      id: '3',
      name: 'AP Calculus AB',
      scoreDistribution: [
        { score: 5, percentage: 22.4 },
        { score: 4, percentage: 16.2 },
        { score: 3, percentage: 19.4 },
        { score: 2, percentage: 21.7 },
        { score: 1, percentage: 20.3 },
      ],
      difficulty: 4,
      attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
    },
    {
      id: '4',
      name: 'AP Calculus BC',
      scoreDistribution: [
        { score: 5, percentage: 43.5 },
        { score: 4, percentage: 15.9 },
        { score: 3, percentage: 19.0 },
        { score: 2, percentage: 15.2 },
        { score: 1, percentage: 6.3 },
      ],
      difficulty: 5,
      attributes:  ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
    },
    {
      id: '5',
      name: 'AP Chemistry',
      scoreDistribution: [
        { score: 5, percentage: 16.0 },
        { score: 4, percentage: 27.1 },
        { score: 3, percentage: 32.0 },
        { score: 2, percentage: 16.9 },
        { score: 1, percentage: 8.0 },
      ],
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Data Interpretation'],
    },
    {
      id: '6',
      name: 'AP Chinese Language & Culture',
      scoreDistribution: [
        { score: 5, percentage: 54.2 },
        { score: 4, percentage: 18.8 },
        { score: 3, percentage: 15.4 },
        { score: 2, percentage: 5.0 },
        { score: 1, percentage: 6.6 },
      ],
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '7',
      name: 'AP Comparative Government & Politics',
      scoreDistribution: [
        { score: 5, percentage: 16.4 },
        { score: 4, percentage: 23.2 },
        { score: 3, percentage: 31.2 },
        { score: 2, percentage: 16.2 },
        { score: 1, percentage: 13.0 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Global Perspectives', 'Social Justice and Equity'],
    },
    {
      id: '8',
      name: 'AP Computer Science A',
      scoreDistribution: [
        { score: 5, percentage: 26.8 },
        { score: 4, percentage: 22.4 },
        { score: 3, percentage: 18.8 },
        { score: 2, percentage: 9.5 },
        { score: 1, percentage: 22.5 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving'],
    },
    {
      id: '9',
      name: 'AP Computer Science Principles',
      scoreDistribution: [
        { score: 5, percentage: 11.5 },
        { score: 4, percentage: 20.6 },
        { score: 3, percentage: 31.1 },
        { score: 2, percentage: 20.5 },
        { score: 1, percentage: 16.4 },
      ],
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '10',
      name: 'AP English Language and Composition',
      scoreDistribution: [
        { score: 5, percentage: 10.3 },
        { score: 4, percentage: 19.7 },
        { score: 3, percentage: 26.1 },
        { score: 2, percentage: 29.5 },
        { score: 1, percentage: 14.4 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Communication Skills'],
    },
    {
      id: '11',
      name: 'AP English Literature and Composition',
      scoreDistribution: [
        { score: 5, percentage: 14.9 },
        { score: 4, percentage: 27.8 },
        { score: 3, percentage: 34.5 },
        { score: 2, percentage: 14.4 },
        { score: 1, percentage: 8.4 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Literary Analysis'],
    },
    {
      id: '12',
      name: 'AP Environmental Science',
      scoreDistribution: [
        { score: 5, percentage: 8.3 },
        { score: 4, percentage: 28.4 },
        { score: 3, percentage: 17.0 },
        { score: 2, percentage: 26.4 },
        { score: 1, percentage: 19.9 },
      ],
      difficulty: 3,
      attributes: ['Scientific Methodology', 'Environmental Awareness', 'Data Interpretation'],
    },
    {
      id: '13',
      name: 'AP European History',
      scoreDistribution: [
        { score: 5, percentage: 12.9 },
        { score: 4, percentage: 21.3 },
        { score: 3, percentage: 25.2 },
        { score: 2, percentage: 29.0 },
        { score: 1, percentage: 11.6 },
      ],
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Cultural Awareness'],
    },
    {
      id: '14',
      name: 'AP French Language & Culture',
      scoreDistribution: [
        { score: 5, percentage: 13.2 },
        { score: 4, percentage: 25.1 },
        { score: 3, percentage: 36.4 },
        { score: 2, percentage: 19.8 },
        { score: 1, percentage: 5.5 },
      ],
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '15',
      name: 'AP German Language & Culture',
      scoreDistribution: [
        { score: 5, percentage: 21.8 },
        { score: 4, percentage: 21.3 },
        { score: 3, percentage: 24.9 },
        { score: 2, percentage: 19.2 },
        { score: 1, percentage: 12.8 },
      ],
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '16',
      name: 'AP Human Geography',
      scoreDistribution: [
        { score: 5, percentage: 16.0 },
        { score: 4, percentage: 20.0 },
        { score: 3, percentage: 18.4 },
        { score: 2, percentage: 14.0 },
        { score: 1, percentage: 31.6 },
      ],
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives', 'Cultural Awareness'],
    },
    {
      id: '17',
      name: 'AP Italian Language & Culture',
      scoreDistribution: [
        { score: 5, percentage: 23.2 },
        { score: 4, percentage: 22.8 },
        { score: 3, percentage: 26.9 },
        { score: 2, percentage: 17.1 },
        { score: 1, percentage: 10.1 },
      ],
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '18',
      name: 'AP Japanese Language and Culture',
      scoreDistribution: [
        { score: 5, percentage: 50.8 },
        { score: 4, percentage: 8.6 },
        { score: 3, percentage: 17.5 },
        { score: 2, percentage: 8.2 },
        { score: 1, percentage: 14.9 },
      ],
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '19',
      name: 'AP Latin',
      scoreDistribution: [
        { score: 5, percentage: 12.3 },
        { score: 4, percentage: 16.5 },
        { score: 3, percentage: 28.0 },
        { score: 2, percentage: 24.9 },
        { score: 1, percentage: 18.4 },
      ],
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Linguistic Analysis'],
    },
    {
      id: '20',
      name: 'AP Macroeconomics',
      scoreDistribution: [
        { score: 5, percentage: 17.1 },
        { score: 4, percentage: 22.9 },
        { score: 3, percentage: 24.7 },
        { score: 2, percentage: 21.6 },
        { score: 1, percentage: 13.7 },
      ],
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives'],
    },
    {
      id: '21',
      name: 'AP Microeconomics',
      scoreDistribution: [
        { score: 5, percentage: 21.3 },
        { score: 4, percentage: 26.0 },
        { score: 3, percentage: 20.6 },
        { score: 2, percentage: 19.9 },
        { score: 1, percentage: 12.1 },
      ],
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives'],
    },
    {
      id: '22',
      name: 'AP Music Theory',
      scoreDistribution: [
        { score: 5, percentage: 19.8 },
        { score: 4, percentage: 16.9 },
        { score: 3, percentage: 24.0 },
        { score: 2, percentage: 24.1 },
        { score: 1, percentage: 15.2 },
      ],
      difficulty: 4,
      attributes:  ['Creative Expression', 'Analytical Thinking'],
    },
    {
      id: '23',
      name: 'AP Physics 1: Algebra-Based',
      scoreDistribution: [
        { score: 5, percentage: 8.8 },
        { score: 4, percentage: 18.3 },
        { score: 3, percentage: 18.5 },
        { score: 2, percentage: 28.0 },
        { score: 1, percentage: 26.4 },
      ],
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '24',
      name: 'AP Physics 2: Algebra-Based',
      scoreDistribution: [
        { score: 5, percentage: 16.5 },
        { score: 4, percentage: 18.5 },
        { score: 3, percentage: 34.9 },
        { score: 2, percentage: 23.8 },
        { score: 1, percentage: 6.4 },
      ],
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '25',
      name: 'AP Physics C: Electricity & Magnetism',
      scoreDistribution: [
        { score: 5, percentage: 33.6 },
        { score: 4, percentage: 23.5 },
        { score: 3, percentage: 13.1 },
        { score: 2, percentage: 17.9 },
        { score: 1, percentage: 11.9 },
      ],
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '26',
      name: 'AP Physics C: Mechanics',
      scoreDistribution: [
        { score: 5, percentage: 26.4 },
        { score: 4, percentage: 26.3 },
        { score: 3, percentage: 20.7 },
        { score: 2, percentage: 14 },
        { score: 1, percentage: 12.5 },
      ],
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '27',
      name: 'AP Psychology',
      scoreDistribution: [
        { score: 5, percentage: 16.9 },
        { score: 4, percentage: 23.2 },
        { score: 3, percentage: 19.5 },
        { score: 2, percentage: 12.4 },
        { score: 1, percentage: 28 },
      ],
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Scientific Methodology', 'Problem-Solving'],
    },
    {
      id: '28',
      name: 'AP Research',
      scoreDistribution: [
        { score: 5, percentage: 13.3 },
        { score: 4, percentage: 26.4 },
        { score: 3, percentage: 44.7 },
        { score: 2, percentage: 12.5 },
        { score: 1, percentage: 3.1 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Research Methodology'],
    },
    {
      id: '29',
      name: 'AP Seminar',
      scoreDistribution: [
        { score: 5, percentage: 11.4 },
        { score: 4, percentage: 19.7 },
        { score: 3, percentage: 53.9 },
        { score: 2, percentage: 11.2 },
        { score: 1, percentage: 3.8 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Research Methodology'],
    },
    {
      id: '30',
      name: 'AP Spanish Language & Culture',
      scoreDistribution: [
        { score: 5, percentage: 24.3 },
        { score: 4, percentage: 30 },
        { score: 3, percentage: 29.6 },
        { score: 2, percentage: 13.5 },
        { score: 1, percentage: 2.7 },
      ],
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '31',
      name: 'AP Spanish Literature & Culture',
      scoreDistribution: [
        { score: 5, percentage: 8.5 },
        { score: 4, percentage: 23.3 },
        { score: 3, percentage: 35.6 },
        { score: 2, percentage: 22.5 },
        { score: 1, percentage: 10.1 },
      ],
      difficulty: 4,
      attributes: ['Cultural Awareness', 'Literary Analysis'],
    },
    {
      id: '32',
      name: 'AP Statistics',
      scoreDistribution: [
        { score: 5, percentage: 15.1 },
        { score: 4, percentage: 22.2 },
        { score: 3, percentage: 22.7 },
        { score: 2, percentage: 16.2 },
        { score: 1, percentage: 23.8 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Quantitative Skills', 'Data Interpretation'],
    },
    {
      id: '33',
      name: 'AP Studio Art: 2-D Design',
      scoreDistribution: [
        { score: 5, percentage: 11.5 },
        { score: 4, percentage: 31.5 },
        { score: 3, percentage: 40.7 },
        { score: 2, percentage: 14.4 },
        { score: 1, percentage: 2 },
      ],
      difficulty: 3,
      attributes: ['Creative Expression', 'Visual Analysis'],
    },
    {
      id: '34',
      name: 'AP Studio Art: 3-D Design',
      scoreDistribution: [
        { score: 5, percentage: 7.1 },
        { score: 4, percentage: 25.2 },
        { score: 3, percentage: 39.9 },
        { score: 2, percentage: 23.5 },
        { score: 1, percentage: 4.4 },
      ],
      difficulty: 3,
      attributes: ['Creative Expression', 'Design Principles'],
    },
    {
      id: '35',
      name: 'AP Studio Art: Drawing',
      scoreDistribution: [
        { score: 5, percentage: 15.7 },
        { score: 4, percentage: 32.9 },
        { score: 3, percentage: 36.1 },
        { score: 2, percentage: 13.1 },
        { score: 1, percentage: 2.1 },
      ],
      difficulty: 3,
      attributes: ['Creative Expression', 'Visual Analysis'],
    },
    {
      id: '36',
      name: 'AP U.S. Government & Politics',
      scoreDistribution: [
        { score: 5, percentage: 12.8 },
        { score: 4, percentage: 11.3 },
        { score: 3, percentage: 25.1 },
        { score: 2, percentage: 24 },
        { score: 1, percentage: 26.8 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Historical Perspectives', 'Social Justice and Equity'],
    },
    {
      id: '37',
      name: 'AP U.S. History',
      scoreDistribution: [
        { score: 5, percentage: 10.6 },
        { score: 4, percentage: 14.8 },
        { score: 3, percentage: 22.1 },
        { score: 2, percentage: 22.7 },
        { score: 1, percentage: 29.8 },
      ],
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Social Justice and Equity'],
    },
    {
      id: '38',
      name: 'AP World History',
      scoreDistribution: [
        { score: 5, percentage: 15.3 },
        { score: 4, percentage: 21.9 },
        { score: 3, percentage: 27.4 },
        { score: 2, percentage: 22.3 },
        { score: 1, percentage: 13 },
      ],
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Global Perspectives'],
    },
    {
      id: '39',
      name: 'AP Precalculus',
      scoreDistribution: [
        { score: 5, percentage: 0 },
        { score: 4, percentage: 0 },
        { score: 3, percentage: 0 },
        { score: 2, percentage: 0 },
        { score: 1, percentage: 0 },
      ],
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Quantitative Skills'],
    },
  ];

  getAllApClasses(): ApClass[] {
    return this.apClasses;
  }

  findOne(id: string): ApClass {
    const apClass = this.apClasses.find((apClass) => apClass.id === id);
    if (!apClass) {
      throw new NotFoundException(`AP Class with ID "${id}" not found`);
    }
    return apClass;
  }
}
