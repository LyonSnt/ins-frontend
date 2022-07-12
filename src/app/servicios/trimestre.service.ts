import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { ITrimestre } from '@modelos/itrimestre';

@Injectable({
  providedIn: 'root'
})
export class TrimestreService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _createTrimestre(trimestre): Observable<ITrimestre> {
    return this.http.post<ITrimestre>(this.urlLaravel + "trimestre", JSON.stringify(trimestre), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarTrimestreH(): Observable<ITrimestre[]> {
    return this.http.get<ITrimestre[]>(this.urlLaravel + "trimestreh")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarTrimestreM(): Observable<ITrimestre[]> {
    return this.http.get<ITrimestre[]>(this.urlLaravel + "trimestrem")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarTrimestrePorId(id): Observable<ITrimestre> {
    return this.http.get<ITrimestre>(this.urlLaravel + "trimestre" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarTrimestre(id: number, trimestre: ITrimestre): Observable<ITrimestre> {
    return this.http.put<ITrimestre>(this.urlLaravel + "trimestre"+ '/' + id, JSON.stringify(trimestre), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarTrimestre(id: number){
    return this.http.delete<ITrimestre>(this.urlLaravel + "trimestre" + '/' + id, this.httpOptions)
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
