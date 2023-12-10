import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Empleado } from '../models/empleado';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseApiUrl: String  = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  loginEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + '/login', empleado).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
  
}
