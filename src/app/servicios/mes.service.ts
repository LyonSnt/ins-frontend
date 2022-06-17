import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { IMes } from '@modelos/imes';

@Injectable({
  providedIn: 'root'
})
export class MesService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _createMes(mes): Observable<IMes> {
    return this.http.post<IMes>(this.urlLaravel + "mes", JSON.stringify(mes), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarMes(): Observable<IMes[]> {
    return this.http.get<IMes[]>(this.urlLaravel + "mes")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarMesPorId(id): Observable<IMes> {
    return this.http.get<IMes>(this.urlLaravel + "mes" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarMes(id: number, mes: IMes): Observable<IMes> {
    return this.http.put<IMes>(this.urlLaravel + "mes"+ '/' + id, JSON.stringify(mes), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarMes(id: number){
    return this.http.delete<IMes>(this.urlLaravel + "mes" + '/' + id, this.httpOptions)
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
