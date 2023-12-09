import { Component, OnInit  } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent implements OnInit {

  empleados: Empleado[] =[];

  constructor(private empleadoServicio: EmpleadoService){}

  ngOnInit():void{
    this.empleadoServicio.GetAllEmpleados()
    .subscribe({
      next: (empleados)=>{
        this.empleados = empleados;
      },
      error: (response)=>{
        console.log(response);
      }
    })
  }
}
