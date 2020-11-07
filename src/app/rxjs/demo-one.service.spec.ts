import { TestBed } from '@angular/core/testing';

import { DemoOneService } from './demo-one.service';

describe('DemoOneService', () => {
  let service: DemoOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
