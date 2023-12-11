// login.component.ts
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public myForm!: FormGroup;
  empleado: Empleado = {
    idEmpleado: 0,
    nombre: '',
    contrasena: '',
    rol: '',
    idRol: 0
  };

  mensajeError: string | null = null;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
  ) {}

  login() {
    this.mensajeError = null;  // Reiniciar el mensaje de error
  
    this.loginService.loginEmpleado(this.empleado).subscribe(
      response => {
        if (response.message === 'Bienvenido') {
          this.authService.login(response.token);
          window.confirm(`Bienvenido ${this.empleado.nombre}`);
          this.router.navigate(['/login/empleados2']);
        } else {
          console.error('Error:', response);
  
          if (response.message === 'Acceso no autorizado. El usuario no tiene el rol necesario.') {
            window.confirm('Acceso no autorizado. El usuario no tiene el rol necesario.');
          } else {
            window.confirm('Error en nombre o contraseña');
          }
        }
      }, error => {
        console.error('Error:', error);
        if (error instanceof HttpErrorResponse) {
          window.confirm('Acceso no autorizado. El usuario no tiene el rol necesario.');
        } else {
          window.confirm('Acceso no autorizado. El usuario no tiene el rol necesario.');
        }
      }
    );
  }
  
}
