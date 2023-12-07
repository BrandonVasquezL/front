import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Empleado } from '../models/empleado';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseApiUrl: String  = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  LoginEmpleado(LoginEmpleadoReques:Empleado):  Observable<Empleado>{
    return this.http.post<Empleado>(this.baseApiUrl + "/login", LoginEmpleadoReques);
  }
}
