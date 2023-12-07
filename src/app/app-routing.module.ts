import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './componentes/Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/Empleado/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './componentes/Empleado/empleado-list/empleado-list.component';
import { EmpleadoList2Component } from './componentes/Empleado/empleado-list2/empleado-list2.component';
import { LoginComponent } from './componentes/login/login.component'
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


const routes: Routes = [
    {
      path:'empleados',
      component: EmpleadoListComponent
    },

    {
      path:'empleados2',
      component: EmpleadoList2Component
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
    }, 
    {
      path: 'nosotros',
      component: NosotrosComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }