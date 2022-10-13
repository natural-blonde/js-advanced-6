import { TestBed } from '@angular/core/testing';

import { UserBlobServiceService } from './user-blob-service.service';

describe('UserBlobServiceService', () => {
  let service: UserBlobServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBlobServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
