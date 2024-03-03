import { TestBed } from '@angular/core/testing';
import { RecommendationsService } from './recommendations.service';
import { ApClassesService } from './ap-classes.service';
import { MajorsService } from './majors.service';

describe('RecommendationsService', () => {
  let service: RecommendationsService;
  let apClassesService: ApClassesService;
  let majorsService: MajorsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        RecommendationsService,
        {
          provide: ApClassesService,
          useValue: {
            getAllApClasses: jasmine.createSpy().and.resolveTo([
              { id: '1', name: 'History', attributes: ['Historical Perspectives', 'Cultural Awareness'] },
              { id: '2', name: 'Physics', attributes: ['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation'] },
            ]),
          },
        },
        {
          provide: MajorsService,
          useValue: {
            getMajorAttributes: jasmine.createSpy().and.callFake((major) => {
              switch (major) {
                case 'History':
                  return Promise.resolve(['Historical Perspectives', 'Cultural Awareness']);
                case 'Physics':
                  return Promise.resolve(['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation']);
                default:
                  return Promise.resolve([]);
              }
            }),
          },
        },
      ],
    }).compileComponents();

    service = TestBed.inject(RecommendationsService);
    apClassesService = TestBed.inject(ApClassesService);
    majorsService = TestBed.inject(MajorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRecommendations', () => {
    it('should return recommended AP classes based on the attributes of two majors', async () => {
      const major1 = 'History';
      const major2 = 'Physics';
      const recommendations = await service.getRecommendations(major1, major2);

      expect(recommendations.length).toBeGreaterThan(0);
      const expectedNames = ['History', 'Physics'];
      const receivedNames = recommendations.map(r => r.name);
      expectedNames.forEach(name => expect(receivedNames).toContain(name));

      expect(majorsService.getMajorAttributes).toHaveBeenCalledWith(major1);
      expect(majorsService.getMajorAttributes).toHaveBeenCalledWith(major2);
      expect(apClassesService.getAllApClasses).toHaveBeenCalled();
    });
  });
});
