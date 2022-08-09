import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { Nota } from '@modelos/nota';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private urlLaravel = environment.baseLaravel;
  allestudent = new BehaviorSubject<Estudiante2[]>(null!);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private _servicioLogin: LoginService,
    private http: HttpClient
  ) {


  }


  _buscarNotaPorId(id): Observable<Nota> {
    return this.http.get<Nota>(this.urlLaravel + "buscarNotaPorId" + '/' + id) //ESTA PARTE ESTA SIENDO UTILIZADO EN PERFIL ESTUDIANTE
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _listarNota(): Observable<Nota[]> { //NO ESTOY UTILIZANDO
    return this.http.get<Nota[]>(this.urlLaravel + "listarNota")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _listarNota2(id, id2): Observable<Nota> {
    return this.http.get<Nota>(this.urlLaravel + "listarNota2" + '/' + id + '/' + id2)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  

  _actualizarNota(id: number, nota: any): Observable<Nota> {
    return this.http.put<Nota>(this.urlLaravel + "actualizarNota" + '/' + id, JSON.stringify(nota), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
