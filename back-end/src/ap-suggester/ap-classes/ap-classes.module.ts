import { Module } from '@nestjs/common';
import { ApClassesService } from './ap-classes.service';
import { ApClassesController } from './ap-classes.controller';

@Module({
  providers: [ApClassesService],
  controllers: [ApClassesController]
})
export class ApClassesModule {}
