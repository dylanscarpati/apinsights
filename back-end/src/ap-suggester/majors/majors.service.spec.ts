import { Test, TestingModule } from '@nestjs/testing';
import { MajorsService, Major } from './majors.service';

describe('MajorsService', () => {
  let service: MajorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorsService],
    }).compile();

    service = module.get<MajorsService>(MajorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of all majors', () => {
      const majors = service.findAll();
      expect(Array.isArray(majors)).toBeTruthy();
      expect(majors.length).toBe(36);
      expect(majors[0]).toHaveProperty('id');
      expect(majors[0]).toHaveProperty('name');
    });
  });

  describe('findOne', () => {
    it('should return a specific major by ID if it exists', () => {
      const sampleId = '1';
      const major = service.findOne(sampleId);
      expect(major).toBeDefined();
      expect(major).toHaveProperty('id', sampleId);
      expect(major).toHaveProperty('name', 'Anthropology/Sociology');
    });

    it('should return undefined for an ID that does not exist', () => {
      const nonExistentId = '100';
      const major = service.findOne(nonExistentId);
      expect(major).toBeUndefined();
    });
  });

  describe('Major ID and Name Integrity', () => {
    it('should have correct names for known IDs', () => {
      const knownMajors: Major[] = [
        { id: '11', name: 'Computer Science' },
        { id: '28', name: 'Nursing' },
        { id: '34', name: 'Physical Therapy/Kinesiology' },
      ];

      knownMajors.forEach((knownMajor) => {
        const major = service.findOne(knownMajor.id);
        expect(major).toBeDefined();
        expect(major).toHaveProperty('id', knownMajor.id);
        expect(major).toHaveProperty('name', knownMajor.name);
      });
    });
  });

  describe('Comprehensive Major Verification', () => {
    it('should verify the integrity of all majors', () => {
      const majors = service.findAll();
      majors.forEach((major) => {
        const foundMajor = service.findOne(major.id);
        expect(foundMajor).toBeDefined();
        expect(foundMajor).toEqual(major);
      });
    });
  });
});
