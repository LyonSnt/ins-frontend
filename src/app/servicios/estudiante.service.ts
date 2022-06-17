import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstudiante } from '@modelos/iestudiante';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }


  _createEstudiante(estudiante): Observable<IEstudiante> {
    return this.http.post<IEstudiante>(this.urlLaravel + "estudiante", JSON.stringify(estudiante), this.httpOptions)
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

  _listar(): Observable<IEstudiante[]> {
    return this.http.get<IEstudiante[]>(this.urlLaravel + "estudiante")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarPorId(id): Observable<IEstudiante> {
    return this.http.get<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _editar(id: number, estudiante: IEstudiante): Observable<IEstudiante> {
    return this.http.put<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id, JSON.stringify(estudiante), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _eliminar(id: number) {
    return this.http.delete<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id, this.httpOptions)
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
