import { Test, TestingModule } from '@nestjs/testing';
import { MajorsController } from './majors.controller';
import { MajorsService } from './majors.service';

describe('MajorsController', () => {
  let controller: MajorsController;
  let service: MajorsService;

  beforeEach(async () => {
    const mockMajorsService = {
      findAll: jest.fn(() => [
        { id: '1', name: 'Computer Science' },
        { id: '2', name: 'Business and Management' },
      ]),
      findOne: jest.fn((id: string) => ({
        id,
        name: id === '1' ? 'Computer Science' : 'Unknown',
      })),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MajorsController],
      providers: [
        {
          provide: MajorsService,
          useValue: mockMajorsService,
        },
      ],
    }).compile();

    controller = module.get<MajorsController>(MajorsController);
    service = module.get<MajorsService>(MajorsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllMajors', () => {
    it('should return an array of majors', async () => {
      await expect(controller.getAllMajors()).resolves.toEqual([
        { id: '1', name: 'Computer Science' },
        { id: '2', name: 'Business and Management' },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('getMajorById', () => {
    it('should return a single major object if it exists', async () => {
      const majorId = '1';
      await expect(controller.getMajorById(majorId)).resolves.toEqual({
        id: majorId,
        name: 'Computer Science',
      });
      expect(service.findOne).toHaveBeenCalledWith(majorId);
    });

    it('should handle the case where the major does not exist', async () => {
      const nonExistentId = '999';
      service.findOne = jest.fn().mockReturnValueOnce(undefined);
      await expect(controller.getMajorById(nonExistentId)).rejects.toThrow(
        'Major not found',
      );
      expect(service.findOne).toHaveBeenCalledWith(nonExistentId);
    });
  });

  describe('receiveSelectedMajors', () => {
    it('should accept exactly two selected majors and return a success message', async () => {
      const selectedMajors = ['Computer Science', 'Business and Management'];
      await expect(controller.receiveSelectedMajors(selectedMajors)).resolves.toEqual({
        status: 'success',
        message: 'Selected majors received successfully.'
      });
    });

    it('should return an error message if more or less than two majors are selected', async () => {
      const selectedMajorsTooFew = ['Computer Science'];
      const selectedMajorsTooMany = ['Computer Science', 'Business and Management', 'Biology'];

      // Testing for too few majors selected
      await expect(controller.receiveSelectedMajors(selectedMajorsTooFew)).resolves.toEqual({
        status: 'error',
        message: 'You must select exactly two majors.'
      });

      // Testing for too many majors selected
      await expect(controller.receiveSelectedMajors(selectedMajorsTooMany)).resolves.toEqual({
        status: 'error',
        message: 'You must select exactly two majors.'
      });
    });
  });
});