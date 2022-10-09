import { TestBed } from '@angular/core/testing';

import { LaundryService } from './laundry.service';

describe('LaundryService', () => {
  let service: LaundryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaundryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
