import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './componentes/Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/Empleado/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './componentes/Empleado/empleado-list/empleado-list.component';
import { LoginComponent } from './componentes/login/login.component'


const routes: Routes = [
    {
      path:'empleados',
      component: EmpleadoListComponent
    },
  
    {
      path:'empleado/edit/:id',
      component: EditEmpleadoComponent
  
    },
  
    {
      path:'empleado/add',
      component: AddEmpleadoComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }