import { TestBed, inject } from '@angular/core/testing';

import { BooksearchService } from './booksearch.service';

describe('BooksearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksearchService]
    });
  });

  it('should be created', inject([BooksearchService], (service: BooksearchService) => {
    expect(service).toBeTruthy();
  }));
});
