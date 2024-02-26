import { Module } from '@nestjs/common';
import { RecommendationsController } from './recommendations.controller';
import { RecommendationsService } from './recommendations.service';
import { ApClassesModule } from '../ap-classes/ap-classes.module';
import { MajorsModule } from '../majors/majors.module';
import { ApClassesService } from '../ap-classes/ap-classes.service';
import { MajorsService } from '../majors/majors.service';

@Module({
  imports: [ApClassesModule, MajorsModule],
  controllers: [RecommendationsController],
  providers: [RecommendationsService, ApClassesService, MajorsService],
})
export class RecommendationsModule {}