import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddEmpleadoComponent } from './componentes/Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/Empleado/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './componentes/Empleado/empleado-list/empleado-list.component';
import { EmpleadoList2Component } from './componentes/Empleado/empleado-list2/empleado-list2.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component'; 
import { NgIf } from '@angular/common';


@NgModule({
    declarations:[
        AppComponent,
        AddEmpleadoComponent,
        EditEmpleadoComponent,
        EmpleadoListComponent,
        EmpleadoList2Component,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        NgIf,
        ReactiveFormsModule
      ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{}
