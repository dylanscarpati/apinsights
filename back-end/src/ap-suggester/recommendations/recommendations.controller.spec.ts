import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationsController } from './recommendations.controller';
import { RecommendationsService } from './recommendations.service';
import { ApClass } from '../ap-classes/ap-classes.service';

describe('RecommendationsController', () => {
  let controller: RecommendationsController;
  let recommendationsService: jest.Mocked<RecommendationsService>;

  beforeEach(async () => {
    // Define RecommendationsService as a mock with jest.mocked
    const mockRecommendationsService = {
      getRecommendations: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationsController],
      providers: [
        {
          provide: RecommendationsService,
          useValue: mockRecommendationsService,
        },
      ],
    }).compile();

    controller = module.get<RecommendationsController>(RecommendationsController);
    recommendationsService = module.get<RecommendationsService>(RecommendationsService) as jest.Mocked<RecommendationsService>;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getRecommendations', () => {
    it('should call RecommendationsService.getRecommendations with the correct parameters', async () => {
      // Correctly defined mock AP classes
      const mockApClasses: ApClass[] = [{
        id: '1',
        name: 'AP Class Example',
        scoreDistribution: [{ score: 5, percentage: 20 }],
        difficulty: 3,
        attributes: ['Attribute1', 'Attribute2'],
      }];

      // Use mockResolvedValue here
      recommendationsService.getRecommendations.mockResolvedValue(mockApClasses);

      const major1 = 'Computer Science';
      const major2 = 'Mathematics';
      await controller.getRecommendations(major1, major2);

      expect(recommendationsService.getRecommendations).toHaveBeenCalledWith(major1, major2);
    });
  });
});
