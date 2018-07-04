import { TestBed, inject } from '@angular/core/testing';

import { WorldcupApiService } from './worldcup-api.service';

describe('WorldcupApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldcupApiService]
    });
  });

  it('should be created', inject([WorldcupApiService], (service: WorldcupApiService) => {
    expect(service).toBeTruthy();
  }));
});
