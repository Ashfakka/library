import { TestBed, inject } from '@angular/core/testing';

import { ApiurlService } from './apiurl.service';

describe('ApiurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiurlService]
    });
  });

  it('should be created', inject([ApiurlService], (service: ApiurlService) => {
    expect(service).toBeTruthy();
  }));
});
