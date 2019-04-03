import { TestBed } from '@angular/core/testing';

import { MatrixNg6LibraryService } from './matrix-ng6-library.service';

describe('MatrixNg6LibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatrixNg6LibraryService = TestBed.get(MatrixNg6LibraryService);
    expect(service).toBeTruthy();
  });
});
