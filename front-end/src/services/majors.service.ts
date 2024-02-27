import { Injectable } from '@angular/core';

export interface Major {
  id: string;
  name: string;
  attributes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MajorsService {
  private readonly majors: Major[] = [
    { id: '1', name: 'Computer Science', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Data Interpretation', 'Interdisciplinary Knowledge'] },
    { id: '2', name: 'Business and Management', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Communication Skills', 'Problem-Solving', 'Global Perspectives'] },
    { id: '3', name: 'Nursing', attributes: ['Scientific Methodology', 'Ethical Reasoning', 'Communication Skills', 'Health and Life Sciences', 'Problem-Solving', 'Social Justice and Equity'] },
    { id: '4', name: 'Engineering (General)', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '5', name: 'Biology/Biological Sciences', attributes: ['Scientific Methodology', 'Analytical Thinking', 'Data Interpretation', 'Health and Life Sciences'] },
    { id: '6', name: 'Psychology', attributes: ['Analytical Thinking', 'Scientific Methodology', 'Communication Skills', 'Problem-Solving'] },
    { id: '7', name: 'Finance and Accounting', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving', 'Data Interpretation'] },
    { id: '8', name: 'Mechanical Engineering', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '9', name: 'Political Science/Government', attributes: ['Analytical Thinking', 'Historical Perspectives', 'Global Perspectives', 'Social Justice and Equity'] },
    { id: '10', name: 'Economics', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Global Perspectives'] },
    { id: '11', name: 'Electrical Engineering', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '12', name: 'Mathematics', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'] },
    { id: '13', name: 'English Language and Literature', attributes: ['Analytical Thinking', 'Creative Expression', 'Communication Skills', 'Historical Perspectives'] },
    { id: '14', name: 'Chemical Engineering', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '15', name: 'History', attributes: ['Historical Perspectives', 'Cultural Awareness', 'Global Perspectives', 'Research Methodology'] },
    { id: '16', name: 'Civil Engineering', attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '17', name: 'Environmental Science', attributes: ['Scientific Methodology', 'Environmental Awareness', 'Data Interpretation', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '18', name: 'Marketing/Marketing Management', attributes: ['Analytical Thinking', 'Creative Expression', 'Communication Skills', 'Problem-Solving'] },
    { id: '19', name: 'Physics', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '20', name: 'Health Sciences/Pre-med', attributes: ['Scientific Methodology', 'Health and Life Sciences', 'Ethical Reasoning', 'Communication Skills', 'Problem-Solving'] },
    { id: '21', name: 'Information Technology (IT)', attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving', 'Data Interpretation'] },
    { id: '22', name: 'Biomedical Engineering', attributes: ['Analytical Thinking', 'Scientific Methodology', 'Technical Proficiency', 'Problem-Solving', 'Health and Life Sciences'] },
    { id: '23', name: 'Communications', attributes: ['Analytical Thinking', 'Creative Expression', 'Communication Skills', 'Problem-Solving'] },
    { id: '24', name: 'Architecture', attributes: ['Analytical Thinking', 'Creative Expression', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '25', name: 'Education', attributes: ['Analytical Thinking', 'Communication Skills', 'Problem-Solving', 'Social Justice and Equity'] },
    { id: '26', name: 'Computer Engineering', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '27', name: 'Art & Design', attributes: ['Creative Expression', 'Cultural Awareness', 'Problem-Solving'] },
    { id: '28', name: 'Pharmacy', attributes: ['Scientific Methodology', 'Health and Life Sciences', 'Ethical Reasoning', 'Problem-Solving'] },
    { id: '29', name: 'Nutrition/Dietetics', attributes: ['Scientific Methodology', 'Health and Life Sciences', 'Problem-Solving', 'Ethical Reasoning'] },
    { id: '30', name: 'Software Engineering', attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving', 'Interdisciplinary Knowledge'] },
    { id: '31', name: 'Anthropology/Sociology', attributes: ['Analytical Thinking', 'Cultural Awareness', 'Global Perspectives', 'Social Justice and Equity'] },
    { id: '32', name: 'International Relations', attributes: ['Analytical Thinking', 'Global Perspectives', 'Cultural Awareness', 'Social Justice and Equity'] },
    { id: '33', name: 'Criminal Justice', attributes: ['Analytical Thinking', 'Ethical Reasoning', 'Problem-Solving', 'Social Justice and Equity'] },
    { id: '34', name: 'Physical Therapy/Kinesiology', attributes: ['Scientific Methodology', 'Health and Life Sciences', 'Problem-Solving', 'Communication Skills'] },
    { id: '35', name: 'Foreign Languages', attributes: ['Cultural Awareness', 'Communication Skills', 'Global Perspectives'] },
    { id: '36', name: 'Religious Studies', attributes: ['Cultural Awareness', 'Historical Perspectives', 'Philosophical Inquiry'] }
  ];

  constructor() {}

  findAll(): Major[] {
    return this.majors;
  }

  findOne(id: string): Major | undefined {
    return this.majors.find(major => major.id === id);
  }

  getMajorAttributes(majorName: string): string[] {
    const major = this.majors.find(major => major.name === majorName);
    return major ? major.attributes : [];
  }
}
