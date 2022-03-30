import { TestBed } from '@angular/core/testing';

import { LoanlibraryService } from './loanlibrary.service';

describe('LoanlibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanlibraryService = TestBed.get(LoanlibraryService);
    expect(service).toBeTruthy();
  });
});
