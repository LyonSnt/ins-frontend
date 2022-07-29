import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICargo } from '@modelos/icargo';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }


  _crearCargo(cargo): Observable<ICargo> {
    return this.http.post<ICargo>(this.urlLaravel + "crearCargo", JSON.stringify(cargo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _listarCargo(): Observable<ICargo[]> {
    return this.http.get<ICargo[]>(this.urlLaravel + "listarCargo")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarCargoPorId(id): Observable<ICargo> {
    return this.http.get<ICargo>(this.urlLaravel + "buscarCargoPorId" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _editarCargo(id: number, cargo: ICargo): Observable<ICargo> {
    return this.http.put<ICargo>(this.urlLaravel + "editarCargo" + '/' + id, JSON.stringify(cargo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _eliminarCargo(id: number) {
    return this.http.delete<ICargo>(this.urlLaravel + "eliminarCargo" + '/' + id, this.httpOptions)
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
