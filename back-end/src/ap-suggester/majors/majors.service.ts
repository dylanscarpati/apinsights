import { Injectable } from '@nestjs/common';

export interface Major {
  id: string;
  name: string;
}

@Injectable()
export class MajorsService {
  private readonly majors: Major[] = [
    { id: '1', name: 'Anthropology/Sociology' },
    { id: '2', name: 'Architecture' },
    { id: '3', name: 'Art & Design' },
    { id: '4', name: 'Biomedical Engineering' },
    { id: '5', name: 'Biology/Biological Sciences' },
    { id: '6', name: 'Business and Management' },
    { id: '7', name: 'Chemical Engineering' },
    { id: '8', name: 'Civil Engineering' },
    { id: '9', name: 'Communications' },
    { id: '10', name: 'Computer Engineering' },
    { id: '11', name: 'Computer Science' },
    { id: '12', name: 'Criminal Justice' },
    { id: '13', name: 'Economics' },
    { id: '14', name: 'Education' },
    { id: '15', name: 'Electrical Engineering' },
    { id: '16', name: 'Engineering (General)' },
    { id: '17', name: 'English Language and Literature' },
    { id: '18', name: 'Environmental Science' },
    { id: '19', name: 'Finance and Accounting' },
    { id: '20', name: 'Foreign Languages' },
    { id: '21', name: 'Health Sciences/Pre-med' },
    { id: '22', name: 'History' },
    { id: '23', name: 'Information Technology (IT)' },
    { id: '24', name: 'International Relations' },
    { id: '25', name: 'Marketing/Marketing Management' },
    { id: '26', name: 'Mathematics' },
    { id: '27', name: 'Mechanical Engineering' },
    { id: '28', name: 'Nursing' },
    { id: '29', name: 'Nutrition/Dietetics' },
    { id: '30', name: 'Pharmacy' },
    { id: '31', name: 'Physics' },
    { id: '32', name: 'Political Science/Government' },
    { id: '33', name: 'Psychology' },
    { id: '34', name: 'Physical Therapy/Kinesiology' },
    { id: '35', name: 'Religious Studies' },
    { id: '36', name: 'Software Engineering' },
  ];

  findAll(): Major[] {
    return this.majors;
  }

  findOne(id: string): Major | undefined {
    return this.majors.find(major => major.id === id);
  }
}