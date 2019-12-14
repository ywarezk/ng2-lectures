import { TestBed, inject } from '@angular/core/testing';

import { Service3Service } from './service3.service';

describe('Service3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service3Service]
    });
  });

  it('should be created', inject([Service3Service], (service: Service3Service) => {
    expect(service).toBeTruthy();
  }));
});
