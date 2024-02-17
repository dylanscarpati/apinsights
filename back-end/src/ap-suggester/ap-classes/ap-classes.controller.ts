import { Controller, Get, Param } from '@nestjs/common';
import { ApClassesService, ApClass } from './ap-classes.service';

@Controller('ap-classes')
export class ApClassesController {
  constructor(private readonly apClassesService: ApClassesService) {}

  @Get()
  async getAllApClasses(): Promise<ApClass[]> {
    return await this.apClassesService.findAll();
  }

  @Get(':id')
  async getApClassById(@Param('id') id: string): Promise<ApClass> {
    return await this.apClassesService.findOne(id);
  }
}