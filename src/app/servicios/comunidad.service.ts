import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { IComunidad } from '@modelos/icomunidad';
import { environment } from 'environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _create(person): Observable<IComunidad> {
    return this.http.post<IComunidad>(this.urlLaravel + "comunidad", JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarComunidad(): Observable<IComunidad[]> {
    return this.http.get<IComunidad[]>(this.urlLaravel + "comunidad")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<IComunidad> {
    return this.http.get<IComunidad>(this.urlLaravel + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, person): Observable<IComunidad> {
    return this.http.put<IComunidad>(this.urlLaravel + "comunidad"+ '/' + id, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _eliminar(id: number){
    return this.http.delete<IComunidad>(this.urlLaravel + "comunidad" + '/' + id, this.httpOptions)
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
