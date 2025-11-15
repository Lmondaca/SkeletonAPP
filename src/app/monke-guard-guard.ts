import { CanActivateFn } from '@angular/router';

export const monkeGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
