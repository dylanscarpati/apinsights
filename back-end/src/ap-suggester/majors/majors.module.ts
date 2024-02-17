import { Module } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { MajorsController } from './majors.controller';

@Module({
  providers: [MajorsService],
  controllers: [MajorsController],
})
export class MajorsModule {}
