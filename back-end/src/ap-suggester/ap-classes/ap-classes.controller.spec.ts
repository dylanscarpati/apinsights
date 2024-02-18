import { Test, TestingModule } from '@nestjs/testing';
import { ApClassesController } from './ap-classes.controller';
import { ApClassesService } from './ap-classes.service';

const mockApClassesService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
};

describe('ApClassesController', () => {
  let controller: ApClassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApClassesController],
      providers: [
        {
          provide: ApClassesService,
          useValue: mockApClassesService,
        },
      ],
    }).compile();

    controller = module.get<ApClassesController>(ApClassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all AP classes', async () => {
    mockApClassesService.findAll.mockResolvedValue('someValue'); // Replace 'someValue' with what you expect

    expect(await controller.getAllApClasses()).toBe('someValue');
    expect(mockApClassesService.findAll).toHaveBeenCalled();
  });

  it('should get a single AP class by id', async () => {
    const id = '1';
    const expectedApClass = { id, name: 'AP Art History' };

    mockApClassesService.findOne.mockResolvedValue(expectedApClass);

    expect(await controller.getApClassById(id)).toBe(expectedApClass);
    expect(mockApClassesService.findOne).toHaveBeenCalledWith(id);
  });
});
