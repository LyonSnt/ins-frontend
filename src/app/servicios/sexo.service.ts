import { ISexo } from './../modelos/isexo';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _create(sexo): Observable<ISexo> {
    return this.http.post<ISexo>(this.urlLaravel + "sexo", JSON.stringify(sexo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listar(): Observable<ISexo[]> {
    return this.http.get<ISexo[]>(this.urlLaravel + "sexo")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarPorId(id): Observable<ISexo> {
    return this.http.get<ISexo>(this.urlLaravel + "sexo" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editar(id: number, sexo: ISexo): Observable<ISexo> {
    return this.http.put<ISexo>(this.urlLaravel + "sexo"+ '/' + id, JSON.stringify(sexo), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminar(id: number){
    return this.http.delete<ISexo>(this.urlLaravel + "sexo" + '/' + id, this.httpOptions)
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
