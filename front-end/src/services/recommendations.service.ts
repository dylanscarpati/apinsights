import { Injectable } from '@angular/core';
import { ApClassesService, ApClass } from './ap-classes.service';
import { MajorsService } from './majors.service';

@Injectable({
  providedIn: 'root' 
})
export class RecommendationsService {
  constructor(
    private readonly apClassesService: ApClassesService,
    private readonly majorsService: MajorsService,
  ) {}

  getRecommendations(major1: string, major2: string): ApClass[] {
    const attributesMajor1 = this.majorsService.getMajorAttributes(major1);
    const attributesMajor2 = this.majorsService.getMajorAttributes(major2);

    const apClasses = this.apClassesService.getAllApClasses();

    // Calculate similarity scores
    const classScores: { [key: string]: number } = {};
    apClasses.forEach(apClass => {
      const similarityScore1 = this.calculateJaccardSimilarity(attributesMajor1, apClass.attributes);
      const similarityScore2 = this.calculateJaccardSimilarity(attributesMajor2, apClass.attributes);
      const totalSimilarityScore = (similarityScore1 + similarityScore2) / 2;
      classScores[apClass.id] = totalSimilarityScore;
    });

    // Sort classes by their scores and pick top recommendations
    const recommendedClasses = Object.entries(classScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .slice(0, 8)
      .map(([id]) => apClasses.find(apClass => apClass.id === id))
      .filter((apClass): apClass is ApClass => apClass !== undefined);

    return recommendedClasses;
  }

  private calculateJaccardSimilarity(set1: string[], set2: string[]): number {
    const intersection = set1.filter(attribute => set2.includes(attribute)).length;
    const union = new Set([...set1, ...set2]).size;
    return intersection / union;
  }
}
