import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {

    nuevoEmpleado: Empleado = {
        idEmpleado: 0,
        nombre: '',
        contrasena: '',
        rol: '',
        idRol: 0
    };

    constructor(private empleadoServicio: EmpleadoService, private router: Router) {}

    agregarEmpleado(): void {
        if (this.nuevoEmpleado.nombre && this.nuevoEmpleado.contrasena && this.nuevoEmpleado.idRol) {
          this.empleadoServicio.AddEmpleado(this.nuevoEmpleado)
            .subscribe(
              (empleadoAgregado) => {
                console.log('Empleado agregado:', empleadoAgregado);
                window.confirm(`Empleado agregado con éxito`);
                this.router.navigate(['/login/empleados2']);
              },
              (error) => {
                console.error('Error al agregar empleado:', error);
                window.confirm(`Error al agregar al empleado`);
              }
            );
        } else {
          window.confirm('Por favor, completa todos los campos antes de enviar la solicitud.');
        }
      }
  }
