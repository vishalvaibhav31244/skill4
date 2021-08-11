import { TestBed } from '@angular/core/testing';

import { PotterapiService } from './potterapi.service';

describe('PotterapiService', () => {
  let service: PotterapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotterapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
