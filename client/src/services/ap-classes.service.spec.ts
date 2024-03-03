import { TestBed } from '@angular/core/testing';
import { ApClassesService } from './ap-classes.service';

describe('ApClassesService', () => {
  let service: ApClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApClassesService],
    });
    service = TestBed.inject(ApClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllApClasses', () => {
    it('should return an array of AP classes', () => {
      const apClasses = service.getAllApClasses();
      expect(Array.isArray(apClasses)).toBeTruthy();
      expect(apClasses.length).toBeGreaterThan(0);
    });
  });

  describe('findOne', () => {
    it('should return a single AP class if it exists', () => {
      const sampleId = '1';
      const apClass = service.findOne(sampleId);
      expect(apClass).toBeDefined();
      expect(apClass?.id).toEqual(sampleId);
    });

    it('should return undefined for a non-existent class ID', () => {
      const nonExistentId = '999';
      const apClass = service.findOne(nonExistentId);
      expect(apClass).toBeUndefined();
    });
  });
});
