import { TestBed } from '@angular/core/testing';

import { NgGilUploaderService } from './ng-file-uploader.service';

describe('NgGilUploaderService', () => {
  let service: NgGilUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGilUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
