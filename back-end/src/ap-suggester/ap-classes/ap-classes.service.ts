import { Injectable, NotFoundException } from '@nestjs/common';

export interface ApClass {
  id: string;
  name: string;
}

@Injectable()
export class ApClassesService {
  private readonly apClasses: ApClass[] = [
    { id: '1', name: 'AP Art History' },
    { id: '2', name: 'AP Biology' },
    { id: '3', name: 'AP Calculus AB' },
    { id: '4', name: 'AP Calculus BC' },
    { id: '5', name: 'AP Chemistry' },
    { id: '6', name: 'AP Chinese Language & Culture' },
    { id: '7', name: 'AP Comparative Government & Politics' },
    { id: '8', name: 'AP Computer Science A' },
    { id: '9', name: 'AP Computer Science Principles' },
    { id: '10', name: 'AP English Language and Composition' },
    { id: '11', name: 'AP English Literature and Composition' },
    { id: '12', name: 'AP Environmental Science' },
    { id: '13', name: 'AP European History' },
    { id: '14', name: 'AP French Language & Culture' },
    { id: '15', name: 'AP German Language & Culture' },
    { id: '16', name: 'AP Human Geography' },
    { id: '17', name: 'AP Italian Language & Culture' },
    { id: '18', name: 'AP Japanese Language and Culture' },
    { id: '19', name: 'AP Latin' },
    { id: '20', name: 'AP Macroeconomics' },
    { id: '21', name: 'AP Microeconomics' },
    { id: '22', name: 'AP Music Theory' },
    { id: '23', name: 'AP Physics 1: Algebra-Based' },
    { id: '24', name: 'AP Physics 2: Algebra-Based' },
    { id: '25', name: 'AP Physics C: Electricity & Magnetism' },
    { id: '26', name: 'AP Physics C: Mechanics' },
    { id: '27', name: 'AP Psychology' },
    { id: '28', name: 'AP Research' },
    { id: '29', name: 'AP Seminar' },
    { id: '30', name: 'AP Spanish Language & Culture' },
    { id: '31', name: 'AP Spanish Literature & Culture' },
    { id: '32', name: 'AP Statistics' },
    { id: '33', name: 'AP Studio Art: 2-D Design' },
    { id: '34', name: 'AP Studio Art: 3-D Design' },
    { id: '35', name: 'AP Studio Art: Drawing' },
    { id: '36', name: 'AP U.S. Government & Politics' },
    { id: '37', name: 'AP U.S. History' },
    { id: '38', name: 'AP World History' },
    { id: '39', name: 'AP Precalculus' },
    
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