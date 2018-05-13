import { TestBed, inject } from '@angular/core/testing';

import { Contrato1Service } from './contrato1.service';

describe('Contrato1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Contrato1Service]
    });
  });

  it('should be created', inject([Contrato1Service], (service: Contrato1Service) => {
    expect(service).toBeTruthy();
  }));
});
