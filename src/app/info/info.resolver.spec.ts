import { TestBed } from '@angular/core/testing';

import { InfoResolver } from './info.resolver';

describe('InfoResolver', () => {
  let resolver: InfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
