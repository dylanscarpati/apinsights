import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { ApClass } from '../ap-classes/ap-classes.service';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Get()
  async getRecommendations(@Query('major1') major1: string, @Query('major2') major2: string): Promise<ApClass[]> {
    if (!major1 || !major2) {
      throw new HttpException('Both major1 and major2 query parameters are required', HttpStatus.BAD_REQUEST);
    }

    try {
      const recommendations = await this.recommendationsService.getRecommendations(major1, major2);
      return recommendations;
    } catch (error) {
      throw new HttpException('Failed to get recommendations', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
