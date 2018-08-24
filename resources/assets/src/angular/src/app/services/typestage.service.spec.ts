import { TestBed, inject } from '@angular/core/testing';

import { TypestageService } from './typestage.service';

describe('TypestageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypestageService]
    });
  });

  it('should be created', inject([TypestageService], (service: TypestageService) => {
    expect(service).toBeTruthy();
  }));
});
