import { TestBed } from '@angular/core/testing';

import { MajorsService } from './majors.service';

describe('MajorsService', () => {
  let service: MajorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
