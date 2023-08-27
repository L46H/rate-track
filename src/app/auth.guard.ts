import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const username = sessionStorage.getItem('username');

  if (username) {
    return true;
  }

  return router.parseUrl('/login');
};
