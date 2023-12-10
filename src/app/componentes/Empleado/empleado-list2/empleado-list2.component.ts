// empleado-list2.component.ts
import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { AuthService } from 'src/app/service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-list2',
  templateUrl: './empleado-list2.component.html',
  styleUrls: ['./empleado-list2.component.css'],
})
export class EmpleadoList2Component implements OnInit {
  empleados: Empleado[] = [];

  constructor(
    private empleadoServicio: EmpleadoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticatedUser()) {
      this.cargarEmpleados();
    }
  }

  cargarEmpleados(): void {
    this.empleadoServicio.GetAllEmpleados().subscribe({
      next: (empleados) => {
        this.empleados = empleados;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  editarEmpleado(idEmpleado: BigInt): void {
    console.log('Editar empleado con ID:', idEmpleado);
  }

  confirmarEliminarEmpleado(idEmpleado: 0): void {
    const empleado = this.empleados.find((e) => e.idEmpleado === idEmpleado);
    if (empleado) {
      const confirmacion = window.confirm(
        `¿Estás seguro de que quieres eliminar al empleado: ${empleado.nombre}?`
      );
      if (confirmacion) {
        this.eliminarEmpleado(idEmpleado);
      }
    }
  }

  eliminarEmpleado(idEmpleado: 0): void {
    this.empleadoServicio.DeleteEmpleado(idEmpleado.toString()).subscribe({
      next: (empleadoEliminado) => {
        console.log('Empleado eliminado:', empleadoEliminado);
        this.cargarEmpleados();
      },
      error: (response) => {
        console.error('Error al eliminar el empleado:', response);
      },
    });
  }
  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
