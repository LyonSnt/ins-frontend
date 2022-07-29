import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { INivel } from '@modelos/inivel';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _createNivel(nivel): Observable<INivel> {
    return this.http.post<INivel>(this.urlLaravel + "nivel", JSON.stringify(nivel), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarNivel(): Observable<INivel[]> {
    return this.http.get<INivel[]>(this.urlLaravel + "listarNivel")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarNivelPorId(id: number): Observable<INivel> {
    return this.http.get<INivel>(this.urlLaravel + "nivel" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarNivel(id: number, nivel: INivel): Observable<INivel> {
    return this.http.put<INivel>(this.urlLaravel + "nivel"+ '/' + id, JSON.stringify(nivel), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarNivel(id: number){
    return this.http.delete<INivel>(this.urlLaravel + "nivel" + '/' + id, this.httpOptions)
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
