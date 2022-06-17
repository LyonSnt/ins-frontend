import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { IAula } from '@modelos/iaula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _createAula(aula): Observable<IAula> {
    return this.http.post<IAula>(this.urlLaravel + "aula", JSON.stringify(aula), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarAula(): Observable<IAula[]> {
    return this.http.get<IAula[]>(this.urlLaravel + "aula")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarAulaPorId(id): Observable<IAula> {
    return this.http.get<IAula>(this.urlLaravel + "aula" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarAula(id: number, aula: IAula): Observable<IAula> {
    return this.http.put<IAula>(this.urlLaravel + "aula"+ '/' + id, JSON.stringify(aula), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarAula(id: number){
    return this.http.delete<IAula>(this.urlLaravel + "aula" + '/' + id, this.httpOptions)
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
