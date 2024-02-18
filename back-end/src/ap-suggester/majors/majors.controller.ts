import { Controller, Get, Param } from '@nestjs/common';
import { MajorsService, Major } from './majors.service';

@Controller('majors')
export class MajorsController {
  constructor(private majorsService: MajorsService) {}

  @Get()
  async getAllMajors(): Promise<Major[]> {
    return this.majorsService.findAll();
  }

  @Get(':id')
  async getMajorById(@Param('id') id: string): Promise<Major> {
    const major = this.majorsService.findOne(id);
    if (!major) {
      throw new Error('Major not found');
    }
    return major;
  }
}
