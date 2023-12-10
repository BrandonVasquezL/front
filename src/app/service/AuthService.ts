// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  private isAuthenticated: boolean = false;
  private authToken: string | null = null;

  login(token: string): void {
    this.isAuthenticated = true;
    this.authToken = token;
    localStorage.setItem('authToken', token); 
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authToken = null;
    localStorage.removeItem('authToken'); 
    this.router.navigate(['/login']); 
  }
  

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated; 
  }

  
  getAuthToken(): string | null {
    return this.authToken;
  }
}
