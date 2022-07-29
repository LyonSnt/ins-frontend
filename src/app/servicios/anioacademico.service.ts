import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { IAnioacademico } from '@modelos/ianioacademico';

@Injectable({
  providedIn: 'root'
})
export class AnioacademicoService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _crearAnioacademico(anioacademico): Observable<IAnioacademico> {
    return this.http.post<IAnioacademico>(this.urlLaravel + "crearAnioacademico", JSON.stringify(anioacademico), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarAnioacademico(): Observable<IAnioacademico[]> {
    return this.http.get<IAnioacademico[]>(this.urlLaravel + "listarAnioacademico")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarAnioacademicoPorId(id): Observable<IAnioacademico> {
    return this.http.get<IAnioacademico>(this.urlLaravel + "buscarAnioacademicoPorId" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarAnioacademico(id: number, anioacademico: IAnioacademico): Observable<IAnioacademico> {
    return this.http.put<IAnioacademico>(this.urlLaravel + "editarAnioacademico"+ '/' + id, JSON.stringify(anioacademico), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarAnioacademico(id: number){
    return this.http.delete<IAnioacademico>(this.urlLaravel + "eliminarAnioacademico" + '/' + id, this.httpOptions)
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
