import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../servicess/auth-service';



export const authGuardGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getAccessToken();

  if (token) {
    return true; // ✅ allow route
  }

  // ❌ block route
  router.navigate(['/unauthorized']);
  return false;
};

