import { Test, TestingModule } from '@nestjs/testing';
import { ApClassesController } from './ap-classes.controller';
import { ApClassesService } from './ap-classes.service';
import { ApClass } from './ap-classes.service';

describe('ApClassesController', () => {
  let controller: ApClassesController;
  let service: ApClassesService;

  beforeEach(async () => {
    const mockApClassesService = {
      findAll: jest.fn((): ApClass[] => [
        {
          id: '1',
          name: 'AP Art History',
          scoreDistribution: [
            { score: 5, percentage: 13.8 },
            { score: 4, percentage: 23.8 },
          ],
          difficulty: 3,
        },
      ]),
      findOne: jest.fn((id: string): ApClass => ({
        id: id,
        name: 'AP Sample Class',
        scoreDistribution: [
          { score: 5, percentage: 20 },
        ],
        difficulty: 3,
      })),
    };

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
    service = module.get<ApClassesService>(ApClassesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all AP classes', async () => {
    const expected = [
      {
        id: '1',
        name: 'AP Art History',
        scoreDistribution: [
          { score: 5, percentage: 13.8 },
          { score: 4, percentage: 23.8 },
        ],
        difficulty: 3,
      },
    ];

    jest.spyOn(service, 'findAll').mockImplementation(() => expected);

    expect(await controller.getAllApClasses()).toBe(expected);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should get a single AP class by id', async () => {
    const id = '1';
    const expectedApClass = {
      id: id,
      name: 'AP Sample Class',
      scoreDistribution: [
        { score: 5, percentage: 20 },
      ],
      difficulty: 3,
    };

    jest.spyOn(service, 'findOne').mockImplementation(() => expectedApClass);

    expect(await controller.getApClassById(id)).toBe(expectedApClass);
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('should accept and process user input for taken AP classes', async () => {
    const takenApClasses = ['AP Calculus AB', 'AP English Literature'];
    const response = await controller.receiveTakenApClasses(takenApClasses);

    expect(response).toEqual({ status: 'success' });

    // Here, you might also want to verify that any side effects of processing
    // takenApClasses occur as expected. Since the current implementation only logs
    // the input, there's no side effect to test yet. But if you later add logic
    // to store user selections or modify application state, you should add
    // corresponding checks here.
  });
});