import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  empleado: Empleado = {
    idEmpleado: 0,
    nombre: '',
    contrasena: '',
    rol: '',
    idRol: 0
  };

  constructor(private empleadoServicio: EmpleadoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const empleadoId = this.route.snapshot.params['id']; 
    this.empleadoServicio.GetEmpleado(empleadoId)
      .subscribe(
        (empleadoObtenido) => {
          this.empleado = empleadoObtenido;
        },
        (error) => {
          console.error('Error al obtener empleado para editar:', error);
        }
      );
  }

  editarEmpleado(): void {
    if (this.empleado.nombre && this.empleado.contrasena && this.empleado.idRol) {
      this.empleadoServicio.UpdateEmpleado(this.empleado.idEmpleado.toString(), this.empleado)
        .subscribe(
          (empleadoActualizado) => {
            console.log('Empleado actualizado:', empleadoActualizado);
            window.confirm(`Empleado actualizado con éxito`);
            this.router.navigate(['/login/empleados2']);
          },
          (error) => {
            console.error('Error al actualizar empleado:', error);
            window.confirm(`Error al actualizar al empleado`);
          }
        );
    } else {
      window.confirm('Por favor, completa todos los campos antes de enviar la solicitud.');
    }
  }
}
