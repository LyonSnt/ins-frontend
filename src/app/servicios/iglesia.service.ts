import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment.prod';
import { IIglesia } from '@modelos/iiglesia';

@Injectable({
  providedIn: 'root'
})
export class IglesiaService {
  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private http: HttpClient) { }


  _crearIglesia(iglesia): Observable<IIglesia> {
    return this.http.post<IIglesia>(this.urlLaravel + "crearIglesia", JSON.stringify(iglesia), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _listarIglesia(): Observable<IIglesia[]> {
    return this.http.get<IIglesia[]>(this.urlLaravel + "listarIglesia")
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _buscarIglesiaPorId(id): Observable<IIglesia> {
    return this.http.get<IIglesia>(this.urlLaravel + "buscarIglesiaPorId" + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  _editarIglesia(id: number, iglesia: IIglesia): Observable<IIglesia> {
    return this.http.put<IIglesia>(this.urlLaravel + "editarIglesia"+ '/' + id, JSON.stringify(iglesia), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _eliminarIglesia(id: number){
    return this.http.delete<IIglesia>(this.urlLaravel + "eliminarIglesia" + '/' + id, this.httpOptions)
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
