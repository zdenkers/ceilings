import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService
      ]
    });
  });

  // RESTORE
  // it('should be created', inject([ApiService], (service: ApiService) => {
  //   expect(service).toBeTruthy();
  // }));
});
