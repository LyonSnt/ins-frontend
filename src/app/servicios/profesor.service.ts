import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfesor } from '@modelos/iprofesor';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }


  _createProfesor(profesor): Observable<IProfesor> {
    return this.http.post<IProfesor>(this.urlLaravel + "profesor", JSON.stringify(profesor), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  uploadData(data) {
    const headers = new HttpHeaders();
    return this.http.post(this.urlLaravel + "file", data, {
      headers: headers
    });
  }

  _listarProfesorH(): Observable<IProfesor[]> {
    return this.http.get<IProfesor[]>(this.urlLaravel + "profesor")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _listarProfesorM(): Observable<IProfesor[]> {
    return this.http.get<IProfesor[]>(this.urlLaravel + "profesorm")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarProfesorPorId(id): Observable<IProfesor> {
    return this.http.get<IProfesor>(this.urlLaravel + "profesor" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _editar(id: number, profesor: IProfesor): Observable<IProfesor> {
    return this.http.put<IProfesor>(this.urlLaravel + "profesor" + '/' + id, JSON.stringify(profesor), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _eliminar(id: number) {
    return this.http.delete<IProfesor>(this.urlLaravel + "profesor" + '/' + id, this.httpOptions)
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
