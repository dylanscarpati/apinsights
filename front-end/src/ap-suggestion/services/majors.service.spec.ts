import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MajorsService } from './majors.service';
import { environment } from '../../environments/environment';
import { Major } from '../../models/major.model';

describe('MajorsService', () => {
  let service: MajorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MajorsService]
    });
    service = TestBed.inject(MajorsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all majors from the API via GET', () => {
    const mockMajors: Major[] = [
      { id: '1', name: 'Computer Science', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Data Interpretation', 'Interdisciplinary Knowledge'] },
      { id: '21', name: 'Information Technology (IT)', attributes: ['Analytical Thinking', 'Technical Proficiency', 'Problem-Solving', 'Data Interpretation'] },
      { id: '28', name: 'Pharmacy', attributes: ['Scientific Methodology', 'Health and Life Sciences', 'Ethical Reasoning', 'Problem-Solving'] },
    ];

    service.getAllMajors().subscribe(majors => {
      expect(majors.length).toBe(mockMajors.length);
      expect(majors).toEqual(mockMajors);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/majors`);
    expect(request.request.method).toBe('GET');
    request.flush(mockMajors);
  });

  it('should retrieve a single major by ID from the API via GET', () => {
    const mockMajor: Major = { id: '1', name: 'Computer Science', attributes: ['Analytical Thinking', 'Quantitative Skills', 'Technical Proficiency', 'Problem-Solving', 'Data Interpretation', 'Interdisciplinary Knowledge'] };
    const id = '1';

    service.getMajorById(id).subscribe(major => {
      expect(major).toEqual(mockMajor);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/majors/${id}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockMajor);
  });
});