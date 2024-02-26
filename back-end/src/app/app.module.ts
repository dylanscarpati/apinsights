import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MajorsModule } from '../ap-suggester/majors/majors.module'; 
import { ApClassesModule } from '../ap-suggester/ap-classes/ap-classes.module'; 
import { RecommendationsModule } from '../ap-suggester/recommendations/recommendations.module'; 

@Module({
  imports: [MajorsModule, ApClassesModule, RecommendationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
