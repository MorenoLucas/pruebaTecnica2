import { TestBed } from '@angular/core/testing';

import { ServApiService } from './serv-api.service';

describe('ServApiService', () => {
  let service: ServApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
