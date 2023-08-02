import { TestBed } from '@angular/core/testing';

import { SecondAutismTestService } from './second-autism-test.service';

describe('SecondAutismTestService', () => {
  let service: SecondAutismTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondAutismTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
