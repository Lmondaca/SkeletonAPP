import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Verificar si hay un usuario autenticado en el estado de navegación
    
    //TODO: Implementar lógica real de autenticación
    const isAuthenticated = true; // Cambiar según la lógica de autenticación real
    if (isAuthenticated) {
      return true;
    } else {
      // Redirigir a login si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
