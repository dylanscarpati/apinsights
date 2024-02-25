import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApClassesService, ApClass } from './ap-classes.service';

@Controller('ap-classes')
export class ApClassesController {
  constructor(private readonly apClassesService: ApClassesService) {}

  // This method retrieves all AP classes. The frontend needs to call this to display options to the user.
  @Get()
  async getAllApClasses(): Promise<ApClass[]> {
    return await this.apClassesService.getAllApClasses();
  }

  // This method retrieves a single AP class by ID. The frontend can use this for detailed views of an AP class.
  @Get(':id')
  async getApClassById(@Param('id') id: string): Promise<ApClass> {
    return await this.apClassesService.findOne(id);
  }

  // This POST method accepts the AP classes the user has taken.
  // The frontend needs to send a request to this endpoint with the list of taken AP classes.
  @Post('taken')
  async receiveTakenApClasses(@Body('takenApClasses') takenApClasses: string[]): Promise<{ status: string }> {
    // The logic to handle the taken AP classes should be implemented here.
    // This could involve storing the data in a database or session, which is not yet implemented.
    console.log(takenApClasses); // For demonstration purposes only. Replace with actual logic.

    // The frontend should expect a response like this after submitting the taken AP classes.
    return { status: 'success' };
  }
}