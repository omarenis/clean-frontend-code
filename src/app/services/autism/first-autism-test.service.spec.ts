import { TestBed } from '@angular/core/testing';

import { FirstAutismTestService } from './first-autism-test.service';

describe('FirstAutismTestService', () => {
  let service: FirstAutismTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstAutismTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
