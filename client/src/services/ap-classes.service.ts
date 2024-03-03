import { Injectable } from '@angular/core';

export interface ApClass {
  id: string;
  name: string;
  difficulty: number;
  attributes: string[];
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApClassesService {
  private readonly apClasses: ApClass[] = [
    {
      id: '1',
      name: 'AP Art History',
      difficulty: 3,
      attributes: ['Historical Perspectives', 'Cultural Awareness'],
      description: "Explores art's diverse global history, fostering an understanding of cultural heritage and artistic expression.",
    },
    {
      id: '2',
      name: 'AP Biology',
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation'],
      description: 'Delves into the complexities of biological systems, emphasizing scientific inquiry and the interconnections of life processes.',
    },
    {
      id: '3',
      name: 'AP Calculus AB',
      difficulty: 4,
      attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
      description: 'Introduces fundamental calculus concepts, focusing on analytical thinking and problem-solving in a mathematical context.',
    },
    {
      id: '4',
      name: 'AP Calculus BC',
      difficulty: 5,
      attributes:  ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
      description: 'Covers more advanced calculus topics, requiring a deeper level of analytical and quantitative reasoning.',
    },
    {
      id: '5',
      name: 'AP Chemistry',
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Data Interpretation'],
      description: 'Engages with the principles of chemistry through scientific inquiry and data analysis to understand the material world.',
    },
    {
      id: '6',
      name: 'AP Chinese Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
      description: 'Enhances language proficiency in Mandarin Chinese while deepening understanding of Chinese culture.',
    },
    {
      id: '7',
      name: 'AP Comparative Government & Politics',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Global Perspectives', 'Social Justice and Equity'],
      description: 'Analyzes governmental systems globally, encouraging critical thinking about politics and society.',
    },
    {
      id: '8',
      name: 'AP Computer Science A',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving'],
      description: 'Focuses on programming methodology, algorithms, and data structures using Java.',
    },
    {
      id: '9',
      name: 'AP Computer Science Principles',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Problem-Solving'],
      description: 'Introduces the foundational concepts of computer science, emphasizing problem-solving and computing impacts.',
    },
    {
      id: '10',
      name: 'AP English Language and Composition',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Communication Skills'],
      description: 'Develops skills in rhetorical analysis and evidence-based argumentation in various contexts.',
    },
    {
      id: '11',
      name: 'AP English Literature and Composition',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Literary Analysis'],
      description: 'Explores literary works to understand structure, style, and themes, enhancing literary analysis skills.',
    },
    {
      id: '12',
      name: 'AP Environmental Science',
      difficulty: 3,
      attributes: ['Scientific Methodology', 'Environmental Awareness', 'Data Interpretation'],
      description: 'Examines the interrelationships of the natural world and the impact of humans on the environment.',
    },
    {
      id: '13',
      name: 'AP European History',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Cultural Awareness'],
      description: 'Studies European history from a chronological and thematic perspective, fostering understanding of cultural and political developments.',
    },
    {
      id: '14',
      name: 'AP French Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
      description: 'Builds proficiency in French language and understanding of Francophone cultures.',
    },
    {
      id: '15',
      name: 'AP German Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
      description: 'Enhances German language skills and cultural knowledge, focusing on communication and global perspectives.',
    },
    {
      id: '16',
      name: 'AP Human Geography',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives', 'Cultural Awareness'],
      description: "Investigates human patterns and processes that have shaped understanding of the Earth's surfaces.",
    },
    {
      id: '17',
      name: 'AP Italian Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
      description: 'Develops Italian language proficiency and cultural knowledge, with an emphasis on communication skills.',
    },
    {
      id: '18',
      name: 'AP Japanese Language and Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
      description: 'Strengthens Japanese language skills and cultural understanding, enhancing communication.',
    },
    {
      id: '19',
      name: 'AP Latin',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Linguistic Analysis'],
      description: 'Focuses on the translation of Latin literature and the analysis of historical and literary contexts.',
    },
    {
      id: '20',
      name: 'AP Macroeconomics',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives'],
      description: 'Introduces principles of economics that affect economies on a national scale.',
    },
    {
      id: '21',
      name: 'AP Microeconomics',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Global Perspectives'],
      description: 'Explores the decision-making processes of individuals and businesses in economic activities.',
    },
    {
      id: '22',
      name: 'AP Music Theory',
      difficulty: 4,
      attributes:  ['Creative Expression', 'Analytical Thinking'],
      description: 'Examines musical structure and processes, fostering an understanding of music composition and performance.',
    },
    {
      id: '23',
      name: 'AP Physics 1: Algebra-Based',
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
      description: 'Covers fundamental physics concepts and problem-solving using algebra.',
    },
    {
      id: '24',
      name: 'AP Physics 2: Algebra-Based',
      difficulty: 4,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
      description: 'Continues exploration of physics, focusing on fluid mechanics, thermodynamics, electricity, and magnetism.',
    },
    {
      id: '25',
      name: 'AP Physics C: Electricity & Magnetism',
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
      description: 'Addresses advanced topics in electricity and magnetism, requiring calculus-based solutions.',
    },
    {
      id: '26',
      name: 'AP Physics C: Mechanics',
      difficulty: 5,
      attributes: ['Scientific Methodology', 'Analytical Thinking', 'Problem-Solving'],
      description: 'Explores motion, force, and energy in a calculus-based framework.',
    },
    {
      id: '27',
      name: 'AP Psychology',
      difficulty: 2,
      attributes: ['Analytical Thinking', 'Scientific Methodology', 'Problem-Solving'],
      description: 'Introduces psychological theories and practices, examining the scientific study of human behavior and mental processes.',
    },
    {
      id: '28',
      name: 'AP Research',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Research Methodology'],
      description: 'Enables students to conduct in-depth research on a topic of interest, culminating in a research paper.',
    },
    {
      id: '29',
      name: 'AP Seminar',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Research Methodology'],
      description: 'Develops critical and analytical thinking skills through research, argumentation, and presentation.',
    },
    {
      id: '30',
      name: 'AP Spanish Language & Culture',
      difficulty: 3,
      attributes: ['Cultural Awareness', 'Global Perspectives', 'Communication Skills'],
      description: 'Enhances Spanish language proficiency and cultural understanding, focusing on immersive communication.',
    },
    {
      id: '31',
      name: 'AP Spanish Literature & Culture',
      difficulty: 4,
      attributes: ['Cultural Awareness', 'Literary Analysis'],
      description: 'Explores the diversity of Spanish literature, enhancing analytical and interpretive skills.',
    },
    {
      id: '32',
      name: 'AP Statistics',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Quantitative Skills', 'Data Interpretation'],
      description: 'Teaches methods for collecting, analyzing, and drawing conclusions from data.',
    },
    {
      id: '33',
      name: 'AP Studio Art: 2-D Design',
      difficulty: 3,
      attributes: ['Creative Expression', 'Visual Analysis'],
      description: 'Focuses on principles of design using two-dimensional media.',
    },
    {
      id: '34',
      name: 'AP Studio Art: 3-D Design',
      difficulty: 3,
      attributes: ['Creative Expression', 'Design Principles'],
      description: 'Concentrates on design principles as applied to three-dimensional forms.',
    },
    {
      id: '35',
      name: 'AP Studio Art: Drawing',
      difficulty: 3,
      attributes: ['Creative Expression', 'Visual Analysis'],
      description: 'Emphasizes advanced drawing techniques and the development of a personal style.',
    },
    {
      id: '36',
      name: 'AP U.S. Government & Politics',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Historical Perspectives', 'Social Justice and Equity'],
      description: 'Examines the structure and functions of the U.S. government and political behaviors.',
    },
    {
      id: '37',
      name: 'AP U.S. History',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Social Justice and Equity'],
      description: 'Provides a comprehensive understanding of U.S. history, emphasizing critical analysis of historical events.',
    },
    {
      id: '38',
      name: 'AP World History',
      difficulty: 4,
      attributes: ['Historical Perspectives', 'Analytical Thinking', 'Global Perspectives'],
      description: 'Covers global historical events and movements, encouraging comparative analysis and understanding of world cultures.',
    },
    {
      id: '39',
      name: 'AP Precalculus',
      difficulty: 3,
      attributes: ['Analytical Thinking', 'Quantitative Skills'],
      description: 'Prepares students for calculus through the study of functions, polynomials, and analytical geometry.',
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
