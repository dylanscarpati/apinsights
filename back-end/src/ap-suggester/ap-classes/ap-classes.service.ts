import { Injectable, NotFoundException } from '@nestjs/common';

export interface ApClass {
  id: string;
  name: string;
  difficulty: number;
}

@Injectable()
export class ApClassesService {
  private readonly apClasses: ApClass[] = [
    { id: '1', name: 'AP Art History', difficulty: 3},
    { id: '2', name: 'AP Biology', difficulty: 4},
    { id: '3', name: 'AP Calculus AB', difficulty: 4},
    { id: '4', name: 'AP Calculus BC', difficulty: 5},
    { id: '5', name: 'AP Chemistry', difficulty: 5},
    { id: '6', name: 'AP Chinese Language & Culture', difficulty: 3},
    { id: '7', name: 'AP Comparative Government & Politics', difficulty: 3},
    { id: '8', name: 'AP Computer Science A', difficulty: 3},
    { id: '9', name: 'AP Computer Science Principles', difficulty: 2},
    { id: '10', name: 'AP English Language and Composition', difficulty: 3},
    { id: '11', name: 'AP English Literature and Composition', difficulty: 3},
    { id: '12', name: 'AP Environmental Science', difficulty: 3},
    { id: '13', name: 'AP European History', difficulty: 4},
    { id: '14', name: 'AP French Language & Culture', difficulty: 3},
    { id: '15', name: 'AP German Language & Culture', difficulty: 3},
    { id: '16', name: 'AP Human Geography', difficulty: 2},
    { id: '17', name: 'AP Italian Language & Culture', difficulty: 3},
    { id: '18', name: 'AP Japanese Language and Culture', difficulty: 3},
    { id: '19', name: 'AP Latin', difficulty: 4},
    { id: '20', name: 'AP Macroeconomics', difficulty: 2},
    { id: '21', name: 'AP Microeconomics', difficulty: 2},
    { id: '22', name: 'AP Music Theory', difficulty: 4},
    { id: '23', name: 'AP Physics 1: Algebra-Based', difficulty: 4},
    { id: '24', name: 'AP Physics 2: Algebra-Based', difficulty: 4},
    { id: '25', name: 'AP Physics C: Electricity & Magnetism', difficulty: 5},
    { id: '26', name: 'AP Physics C: Mechanics', difficulty: 5},
    { id: '27', name: 'AP Psychology', difficulty: 2},
    { id: '28', name: 'AP Research', difficulty: 3},
    { id: '29', name: 'AP Seminar', difficulty: 3},
    { id: '30', name: 'AP Spanish Language & Culture', difficulty: 3},
    { id: '31', name: 'AP Spanish Literature & Culture', difficulty: 4},
    { id: '32', name: 'AP Statistics', difficulty: 3},
    { id: '33', name: 'AP Studio Art: 2-D Design', difficulty: 3},
    { id: '34', name: 'AP Studio Art: 3-D Design', difficulty: 3},
    { id: '35', name: 'AP Studio Art: Drawing', difficulty: 3},
    { id: '36', name: 'AP U.S. Government & Politics', difficulty: 3},
    { id: '37', name: 'AP U.S. History', difficulty: 4},
    { id: '38', name: 'AP World History', difficulty: 4},
    { id: '39', name: 'AP Precalculus', difficulty: 3}
];

  findAll(): ApClass[] {
    return this.apClasses;
  }

  findOne(id: string): ApClass {
    const apClass = this.apClasses.find(apClass => apClass.id === id);
    if (!apClass) {
      throw new NotFoundException(`AP Class with ID "${id}" not found`);
    }
    return apClass;
  }
}