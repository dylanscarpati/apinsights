import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationsService } from './recommendations.service';
import { ApClassesService } from '../ap-classes/ap-classes.service';
import { MajorsService } from '../majors/majors.service';

describe('RecommendationsService', () => {
  let service: RecommendationsService;
  let apClassesService: ApClassesService;
  let majorsService: MajorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecommendationsService,
        {
          provide: ApClassesService,
          useValue: {
            getAllApClasses: jest.fn().mockResolvedValue([
              { id: '1', name: 'AP Art History', attributes: ['Historical Perspectives', 'Cultural Awareness'] },
              { id: '2', name: 'AP Biology', attributes: ['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation'] },
            ]),
          },
        },
        {
          provide: MajorsService,
          useValue: {
            getMajorAttributes: jest.fn().mockImplementation((major) => {
              switch (major) {
                case 'AP Art History':
                  return Promise.resolve(['Historical Perspectives', 'Cultural Awareness']);
                case 'AP Biology':
                  return Promise.resolve(['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation']);
                default:
                  return Promise.resolve([]);
              }
            }),
          },
        },
      ],
    }).compile();

    service = module.get<RecommendationsService>(RecommendationsService);
    apClassesService = module.get<ApClassesService>(ApClassesService);
    majorsService = module.get<MajorsService>(MajorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRecommendations', () => {
    it('should return recommended AP classes based on the attributes of two majors', async () => {
      const major1 = 'AP Art History';
      const major2 = 'AP Biology';
      const recommendations = await service.getRecommendations(major1, major2);

      expect(recommendations).toEqual(expect.arrayContaining([
        expect.objectContaining({ name: 'AP Art History' }),
        expect.objectContaining({ name: 'AP Biology' }),
      ]));

      expect(majorsService.getMajorAttributes).toHaveBeenCalledWith(major1);
      expect(majorsService.getMajorAttributes).toHaveBeenCalledWith(major2);
      expect(apClassesService.getAllApClasses).toHaveBeenCalled();
    });

  });
});
