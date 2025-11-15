import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { monkeGuardGuard } from './monke-guard-guard';

describe('monkeGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => monkeGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
