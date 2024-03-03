import { TestBed } from '@angular/core/testing';
import { MajorsService, Major } from './majors.service';

describe('MajorsService', () => {
  let service: MajorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorsService]
    });
    service = TestBed.inject(MajorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('findAll', () => {
    it('should return an array of all majors', () => {
      const majors = service.findAll();
      expect(Array.isArray(majors)).toBeTruthy();
      expect(majors.length).toBeGreaterThan(0); 
      expect(majors[0].id).toBeDefined();
      expect(majors[0].name).toBeDefined();
    });
  });

  describe('findOne', () => {
    it('should return a specific major by ID if it exists', () => {
      const sampleId = '20';
      const major = service.findOne(sampleId);
      expect(major).toBeDefined();
      if (major) {
        expect(major.id).toEqual(sampleId);
        expect(major.name).toEqual('Health Sciences/Pre-med');
      }
    });

    it('should return undefined for an ID that does not exist', () => {
      const nonExistentId = '100';
      const major = service.findOne(nonExistentId);
      expect(major).toBeUndefined();
    });
  });

});
