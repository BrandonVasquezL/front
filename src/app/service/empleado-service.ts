import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Empleado } from '../models/empleado';
import {Observable} from 'rxjs';
import { OverrideKeyword } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  
  GetAllEmpleados(): Observable<Empleado[]>{

    return this.http.get<Empleado[]>(this.baseApiUrl + "/api/empleado");

  }

  AddEmpleado(addEmpleadoRequest: Empleado): Observable<Empleado>{

    return this.http.post<Empleado>(this.baseApiUrl + "/api/Estudiantes", addEmpleadoRequest);
  }

  GetEmpleado(id: string): Observable<Empleado>{
    return this.http.get<Empleado>(this.baseApiUrl+'/api/empleado/'+id);
  }

  UpdateEmpleado(id : string, updateEmpleadoRequest: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.baseApiUrl+'/api/empleadoU/'+id, updateEmpleadoRequest);
  }

  DeleteEmpleado(id: string): Observable<Empleado>{
    return this.http.delete<Empleado>(this.baseApiUrl+'/api/empleadoD/'+id);
  }


}