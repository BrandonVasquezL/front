import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddEmpleadoComponent } from './componentes/Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/Empleado/edit-empleado/edit-empleado.component';
import { EmpleadoListComponent } from './componentes/Empleado/empleado-list/empleado-list.component';

@NgModule({
    declarations:[
        AppComponent,
        AddEmpleadoComponent,
        EditEmpleadoComponent,
        EmpleadoListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
      ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{}
