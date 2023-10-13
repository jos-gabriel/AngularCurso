import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = true;

  login(username: string, password: string): boolean {
    // Lógica para autenticar al usuario
    if (username === 'usuario' && password === 'contrasena') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    // Lógica para cerrar la sesión del usuario
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
