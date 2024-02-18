import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MajorsService, Major } from './majors.service';

@Controller('majors')
export class MajorsController {
  constructor(private majorsService: MajorsService) {}

  // Endpoint to retrieve all majors. Frontend needs to fetch this list to display options for the user to select.
  @Get()
  async getAllMajors(): Promise<Major[]> {
    return this.majorsService.findAll();
  }

  // Endpoint to retrieve a single major by its ID. This can be used in the frontend for displaying detailed information about a specific major.
  @Get(':id')
  async getMajorById(@Param('id') id: string): Promise<Major> {
    const major = this.majorsService.findOne(id);
    if (!major) {
      throw new Error('Major not found'); // Frontend should handle this error, potentially displaying a user-friendly message.
    }
    return major;
  }

  // Endpoint to receive the two majors selected by the user. The frontend needs to send a POST request to this endpoint with the selected majors.
  @Post('selected')
  async receiveSelectedMajors(@Body('selectedMajors') selectedMajors: string[]): Promise<{ status: string; message: string }> {
    // Ensure exactly two majors are selected; frontend should validate this before sending the request.
    if (selectedMajors.length !== 2) {
      return { status: 'error', message: 'You must select exactly two majors.' }; // Frontend should display this message if validation fails.
    }
    
    // Additional logic for the selected majors could be implemented here.
    // For now, simply return a success response.
    // Frontend should confirm to the user that their selections have been successfully received.
    return { status: 'success', message: 'Selected majors received successfully.' };
  }
}