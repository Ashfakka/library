import { TestBed, inject } from '@angular/core/testing';

import { CommonUserDetailService } from './common-user-detail.service';

describe('CommonUserDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonUserDetailService]
    });
  });

  it('should be created', inject([CommonUserDetailService], (service: CommonUserDetailService) => {
    expect(service).toBeTruthy();
  }));
});
