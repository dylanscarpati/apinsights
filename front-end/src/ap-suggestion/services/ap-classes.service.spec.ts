import { TestBed } from '@angular/core/testing';

import { ApClassesService } from './ap-classes.service';

describe('ApClassesService', () => {
  let service: ApClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
