import { TestBed } from '@angular/core/testing';

import { ScientiquesService } from './scientifiques.service';

describe('ScientiquesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScientiquesService = TestBed.get(ScientiquesService);
    expect(service).toBeTruthy();
  });
});
