import { TestBed } from '@angular/core/testing';

import { MediasService } from './medias.service';

describe('MediasService', () => {
  let service: MediasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
