import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../shared/servicios/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticatedUser()) {
    return true; // El usuario tiene permiso para acceder a la ruta
  } else {
    router.navigate(['auth/login']); // Redirige al usuario a la página de inicio de sesión
    return false; // El usuario no tiene permiso para acceder a la ruta
  }
};
