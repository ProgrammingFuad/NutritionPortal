import { TestBed, inject } from '@angular/core/testing';

import { PatientDataServceService } from './patient-data-servce.service';

describe('PatientDataServceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDataServceService]
    });
  });

  it('should be created', inject([PatientDataServceService], (service: PatientDataServceService) => {
    expect(service).toBeTruthy();
  }));
});
