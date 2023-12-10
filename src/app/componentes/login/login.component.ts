// login.component.ts
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';

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

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.loginService.loginEmpleado(this.empleado).subscribe(
      response => {
        if (response.message === 'Bienvenido') {
          // Almacena el token y establece el estado de autenticación
          this.authService.login(response.token);

          // Otras acciones después del inicio de sesión exitoso, como redirigir a otra página
          window.confirm(`Bienvenido ${this.empleado.nombre}`);
          this.router.navigate(['/login/empleados2']);
        } else {
          console.error('Error:', response);
          window.confirm("Error en nombre o contraseña");
        }
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
