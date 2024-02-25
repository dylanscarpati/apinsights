import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApClassesService } from './ap-classes.service';
import { environment } from '../../environments/environment';
import { ApClass } from '../../models/ap-class.model';

describe('ApClassesService', () => {
  let service: ApClassesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApClassesService]
    });
    service = TestBed.inject(ApClassesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all AP classes from the API via GET', () => {
    const mockApClasses: ApClass[] = [
      {
        id: '1',
        name: 'AP Art History',
        scoreDistribution: [
          { score: 5, percentage: 13.8 },
          { score: 4, percentage: 23.8 },
          { score: 3, percentage: 27 },
          { score: 2, percentage: 23.8 },
          { score: 1, percentage: 11.6 },
        ],
        difficulty: 3,
        attributes: ['Historical Perspectives', 'Cultural Awareness'],
      },
      {
        id: '2',
        name: 'AP Biology',
        scoreDistribution: [
          { score: 5, percentage: 14.3 },
          { score: 4, percentage: 23 },
          { score: 3, percentage: 27.2 },
          { score: 2, percentage: 23.6 },
          { score: 1, percentage: 12 },
        ],
        difficulty: 4,
        attributes: ['Scientific Methodology', 'Analytical Thinking', 'Health and Life Sciences', 'Data Interpretation'],
      },
      {
        id: '3',
        name: 'AP Calculus AB',
        scoreDistribution: [
          { score: 5, percentage: 22.4 },
          { score: 4, percentage: 16.2 },
          { score: 3, percentage: 19.4 },
          { score: 2, percentage: 21.7 },
          { score: 1, percentage: 20.3 },
        ],
        difficulty: 4,
        attributes: ['Analytical Thinking', 'Quantitative Skills', 'Problem-Solving'],
      },
    ];

    service.getAllApClasses().subscribe(apClasses => {
      expect(apClasses.length).toBe(mockApClasses.length);
      expect(apClasses).toEqual(mockApClasses);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/ap-classes`);
    expect(request.request.method).toBe('GET');
    request.flush(mockApClasses);
  });

  it('should retrieve a single AP class by ID from the API via GET', () => {
    const mockApClass: ApClass = { id: '1', name: 'AP Class',
      scoreDistribution: [
      { score: 5, percentage: 14.9 },
      { score: 4, percentage: 27.8 },
      { score: 3, percentage: 34.5 },
      { score: 2, percentage: 14.4 },
      { score: 1, percentage: 8.4 }, ],
      difficulty: 5, attributes: ['Analytical Thinking', 'Literary Analysis'], }
    const id = '1';

    service.getApClassById(id).subscribe(apClass => {
      expect(apClass).toEqual(mockApClass);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/ap-classes/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockApClass);
  });

  it('should submit taken AP classes to the API via POST', () => {
    const mockResponse = { status: 'success' };
    const takenApClasses: string[] = ['AP Class 1', 'AP Class 2'];

    service.submitTakenApClasses(takenApClasses).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/ap-classes/taken`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ takenApClasses });
    request.flush(mockResponse);
  });
})