import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecommendationsService } from './recommendations.service';
import { environment } from '../../environments/environment';
import { ApClass } from '../../models/ap-class.model';

describe('RecommendationsService', () => {
  let service: RecommendationsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecommendationsService]
    });

    service = TestBed.inject(RecommendationsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRecommendations should return expected AP classes (HttpClient called once)', () => {
    const expectedApClasses: ApClass[] = [
      { id: '1', name: 'AP Class 1', attributes: ['Attribute1', 'Attribute2'], scoreDistribution: [], difficulty: 3 },
      { id: '2', name: 'AP Class 2', attributes: ['Attribute2', 'Attribute3'], scoreDistribution: [], difficulty: 2 }
    ];

    const major1 = 'Computer Science';
    const major2 = 'Mathematics';

    service.getRecommendations(major1, major2).subscribe(
      apClasses => expect(apClasses).toEqual(expectedApClasses, 'expected AP classes'),
      fail
    );

    const req = httpTestingController.expectOne(`${environment.apiUrl}/recommendations?major1=${encodeURIComponent(major1)}&major2=${encodeURIComponent(major2)}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedApClasses);
  });

});