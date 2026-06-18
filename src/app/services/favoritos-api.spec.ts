import { TestBed } from '@angular/core/testing';

import { FavoritosApi } from './favoritos-api';

describe('FavoritosApi', () => {
  let service: FavoritosApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
