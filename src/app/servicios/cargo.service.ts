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


  _create(cargo): Observable<ICargo> {
    return this.http.post<ICargo>(this.urlLaravel + "cargo", JSON.stringify(cargo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _listar(): Observable<ICargo[]> {
    return this.http.get<ICargo[]>(this.urlLaravel + "cargo")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarPorId(id): Observable<ICargo> {
    return this.http.get<ICargo>(this.urlLaravel + "cargo" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _editar(id: number, cargo: ICargo): Observable<ICargo> {
    return this.http.put<ICargo>(this.urlLaravel + "cargo" + '/' + id, JSON.stringify(cargo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _eliminar(id: number) {
    return this.http.delete<ICargo>(this.urlLaravel + "cargo" + '/' + id, this.httpOptions)
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
