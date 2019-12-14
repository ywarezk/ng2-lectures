import { TestBed, inject } from '@angular/core/testing';

import { StamService } from './stam.service';

describe('StamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StamService]
    });
  });

  it('should be created', inject([StamService], (service: StamService) => {
    expect(service).toBeTruthy();
  }));
});
