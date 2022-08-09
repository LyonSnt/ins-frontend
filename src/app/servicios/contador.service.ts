import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contador } from '@modelos/contador';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor(private http: HttpClient) { }


  _listarContadorEstudiante(): Observable<Contador[]> {
    return this.http.get<Contador[]>(this.urlLaravel + "listarContadorEstudiante")
    .pipe(
      catchError(this.errorHandler)
    )
  }
  _listarContadorMatricula(): Observable<Contador[]> {
    return this.http.get<Contador[]>(this.urlLaravel + "listarContadorMatricula")
    .pipe(
      catchError(this.errorHandler)
    )
  }
  _listarContadorProfesor(): Observable<Contador[]> {
    return this.http.get<Contador[]>(this.urlLaravel + "listarContadorProfesor")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
