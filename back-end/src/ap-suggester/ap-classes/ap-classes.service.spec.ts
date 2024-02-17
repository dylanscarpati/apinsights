import { Test, TestingModule } from '@nestjs/testing';
import { ApClassesService } from './ap-classes.service';
import { NotFoundException } from '@nestjs/common';

describe('ApClassesService', () => {
  let service: ApClassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApClassesService],
    }).compile();

    service = module.get<ApClassesService>(ApClassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of AP classes', () => {
      const apClasses = service.findAll();
      expect(apClasses).toBeInstanceOf(Array);
      expect(apClasses).toHaveLength(39);
    });
  });

  describe('findOne', () => {
    it('should return a single AP class if it exists', () => {
      const apClass = service.findOne('1');
      expect(apClass).toBeDefined();
      expect(apClass.id).toBe('1');
    });

    it('should throw a NotFoundException if the class does not exist', () => {
      const nonExistentId = '999';
      expect(() => {
        service.findOne(nonExistentId);
      }).toThrow(NotFoundException);
    });
  });
});