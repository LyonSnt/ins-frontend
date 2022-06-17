import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { IInstitucion } from '@modelos/iinstitucion';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _createInstitucion(institucion): Observable<IInstitucion> {
    return this.http.post<IInstitucion>(this.urlLaravel + "institucion", JSON.stringify(institucion), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarInstitucion(): Observable<IInstitucion[]> {
    return this.http.get<IInstitucion[]>(this.urlLaravel + "institucion")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarInstitucionPorId(id): Observable<IInstitucion> {
    return this.http.get<IInstitucion>(this.urlLaravel + "institucion" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarInstitucion(id: number, institucion: IInstitucion): Observable<IInstitucion> {
    return this.http.put<IInstitucion>(this.urlLaravel + "institucion"+ '/' + id, JSON.stringify(institucion), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarInstitucion(id: number){
    return this.http.delete<IInstitucion>(this.urlLaravel + "institucion" + '/' + id, this.httpOptions)
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
