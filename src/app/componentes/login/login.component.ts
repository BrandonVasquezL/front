import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  empleado: Empleado = {
    idEmpleado: BigInt(0),
    nombre: '',
    contrasena: '',
    rol: ''
  };

  mensajeError: string | null = null;
  mensajeExito: string | null = null;

  constructor(private loginService: LoginService) { }

  login() {
    this.mensajeError = null;
    this.mensajeExito = null;

    this.loginService.LoginEmpleado(this.empleado).subscribe(
      response => {
        console.log('Éxito:', response);
        this.mensajeExito = 'Inicio de sesión exitoso';
        // Realizar acciones después de un inicio de sesión exitoso, como redirigir a otra página.
      },
      error => {
        console.error('Error:', error);
        this.mensajeError = 'Nombre de usuario o contraseña incorrectos';
        // Mostrar un mensaje de error al usuario o realizar otras acciones según tus necesidades.
      }
    );
  }
}
