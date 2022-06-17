import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstadoCivil } from '@modelos/iestadocivil';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadocivilService {
  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _createEstadoCivil(estadocivil): Observable<IEstadoCivil> {
    return this.http.post<IEstadoCivil>(this.urlLaravel + "estadocivil", JSON.stringify(estadocivil), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarEstadoCivil(): Observable<IEstadoCivil[]> {
    return this.http.get<IEstadoCivil[]>(this.urlLaravel + "estadocivil")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarEstadoCivilPorId(id): Observable<IEstadoCivil> {
    return this.http.get<IEstadoCivil>(this.urlLaravel + "estadocivil" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarEstadoCivil(id: number, estadocivil: IEstadoCivil): Observable<IEstadoCivil> {
    return this.http.put<IEstadoCivil>(this.urlLaravel + "estadocivil"+ '/' + id, JSON.stringify(estadocivil), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarEstadoCivil(id: number){
    return this.http.delete<IEstadoCivil>(this.urlLaravel + "estadocivil" + '/' + id, this.httpOptions)
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
