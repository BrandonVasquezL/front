import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './componentes/Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/Empleado/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './componentes/Empleado/empleado-list/empleado-list.component';
import { EmpleadoList2Component } from './componentes/Empleado/empleado-list2/empleado-list2.component';
import { LoginComponent } from './componentes/login/login.component'
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
    {
      path:'empleados',
      component: EmpleadoListComponent
    },

    {
      path:'login/empleados2',
      component: EmpleadoList2Component,
      canActivate: [AuthGuard]
    },

    {
      path:'login/empleados2/edit/:id',
      component: EditEmpleadoComponent
  
    },
  
    {
      path:'login/empleados2/add',
      component: AddEmpleadoComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }, 
    {
      path: 'nosotros',
      component: NosotrosComponent
    },
    { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }