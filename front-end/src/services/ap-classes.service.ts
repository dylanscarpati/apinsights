import { Injectable } from '@angular/core';

export interface ApClass {
  id: string;
  name: string;
  difficulty: number;
  attributes: string[];
}

@Injectable()
export class ApClassesService {
  private readonly apClasses: ApClass[] = [
    {
      id: '1',
      name: 'AP Art History',
      difficulty: 3,
      attributes: ['Historical Perspectives', 'Cultural Awareness'],
    },
    {
      id: '2',
      name: 'AP Biology',
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation'],
    },
    {
      id: '3',
      name: 'AP Calculus AB',
      difficulty: 4,
      attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
    },
    {
      id: '4',
      name: 'AP Calculus BC',
      difficulty: 5,
      attributes:  ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
    },
    {
      id: '5',
      name: 'AP Chemistry',
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Data Interpretation'],
    },
    {
      id: '6',
      name: 'AP Chinese Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '7',
      name: 'AP Comparative Government & Politics',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Global Perspectives', 'Social Justice and Equity'],
    },
    {
      id: '8',
      name: 'AP Computer Science A',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving'],
    },
    {
      id: '9',
      name: 'AP Computer Science Principles',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '10',
      name: 'AP English Language and Composition',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Communication Skills'],
    },
    {
      id: '11',
      name: 'AP English Literature and Composition',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Literary Analysis'],
    },
    {
      id: '12',
      name: 'AP Environmental Science',
      difficulty: 3,
      attributes: ['Scientific Methodology', 'Environmental Awareness', 'Data Interpretation'],
    },
    {
      id: '13',
      name: 'AP European History',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Cultural Awareness'],
    },
    {
      id: '14',
      name: 'AP French Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '15',
      name: 'AP German Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '16',
      name: 'AP Human Geography',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives', 'Cultural Awareness'],
    },
    {
      id: '17',
      name: 'AP Italian Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '18',
      name: 'AP Japanese Language and Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '19',
      name: 'AP Latin',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Linguistic Analysis'],
    },
    {
      id: '20',
      name: 'AP Macroeconomics',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives'],
    },
    {
      id: '21',
      name: 'AP Microeconomics',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives'],
    },
    {
      id: '22',
      name: 'AP Music Theory',
      difficulty: 4,
      attributes:  ['Creative Expression', 'Analytical Thinking'],
    },
    {
      id: '23',
      name: 'AP Physics 1: Algebra-Based',
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '24',
      name: 'AP Physics 2: Algebra-Based',
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '25',
      name: 'AP Physics C: Electricity & Magnetism',
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '26',
      name: 'AP Physics C: Mechanics',
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
    },
    {
      id: '27',
      name: 'AP Psychology',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Scientific Methodology', 'Problem-Solving'],
    },
    {
      id: '28',
      name: 'AP Research',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Research Methodology'],
    },
    {
      id: '29',
      name: 'AP Seminar',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Research Methodology'],
    },
    {
      id: '30',
      name: 'AP Spanish Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
    },
    {
      id: '31',
      name: 'AP Spanish Literature & Culture',
      difficulty: 4,
      attributes: ['Cultural Awareness', 'Literary Analysis'],
    },
    {
      id: '32',
      name: 'AP Statistics',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Quantitative Skills', 'Data Interpretation'],
    },
    {
      id: '33',
      name: 'AP Studio Art: 2-D Design',
      difficulty: 3,
      attributes: ['Creative Expression', 'Visual Analysis'],
    },
    {
      id: '34',
      name: 'AP Studio Art: 3-D Design',
      difficulty: 3,
      attributes: ['Creative Expression', 'Design Principles'],
    },
    {
      id: '35',
      name: 'AP Studio Art: Drawing',
      difficulty: 3,
      attributes: ['Creative Expression', 'Visual Analysis'],
    },
    {
      id: '36',
      name: 'AP U.S. Government & Politics',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Historical Perspectives', 'Social Justice and Equity'],
    },
    {
      id: '37',
      name: 'AP U.S. History',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Social Justice and Equity'],
    },
    {
      id: '38',
      name: 'AP World History',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Global Perspectives'],
    },
    {
      id: '39',
      name: 'AP Precalculus',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Quantitative Skills'],
    },
  ];

  getAllApClasses(): ApClass[] {
    return this.apClasses;
  }

  findOne(id: string): ApClass | undefined {
    const apClass = this.apClasses.find(apClass => apClass.id === id);
    return apClass;
  }
  
}
