import { TestBed } from '@angular/core/testing';

import { IsProfeGuard } from './is-profe.guard';

describe('IsProfeGuard', () => {
  let guard: IsProfeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsProfeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
