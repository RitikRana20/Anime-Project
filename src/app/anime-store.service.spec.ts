import { TestBed } from '@angular/core/testing';

import { AnimeStoreService } from './anime-store.service';

describe('AnimeStoreService', () => {
  let service: AnimeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
