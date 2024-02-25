import { Injectable } from '@nestjs/common';
import { ApClassesService, ApClass } from '../ap-classes/ap-classes.service';
import { MajorsService, Major } from '../majors/majors.service';

@Injectable()
export class RecommendationsService {
  constructor(
    private readonly apClassesService: ApClassesService,
    private readonly majorsService: MajorsService,
  ) {}

  async getRecommendations(major1: string, major2: string): Promise<ApClass[]> {
    
    const attributesMajor1 = await this.majorsService.getMajorAttributes(major1);
    const attributesMajor2 = await this.majorsService.getMajorAttributes(major2);

    const apClasses = await this.apClassesService.getAllApClasses();

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
                                      .map(([id]) => apClasses.find(apClass => apClass.id === id));

    return recommendedClasses;
  }

  private calculateJaccardSimilarity(set1: string[], set2: string[]): number {
    const intersection = set1.filter(attribute => set2.includes(attribute)).length;
    const union = new Set([...set1, ...set2]).size;
    return intersection / union;
  }
}
