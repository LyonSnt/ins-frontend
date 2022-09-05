import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfesor } from '@modelos/iprofesor';
import { Profesor } from '@modelos/profesor';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private urlLaravel = environment.baseLaravel;

  ___filtrarProfesor = new BehaviorSubject<Profesor[]>(null!);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
    this._filtrarProfesor("");
  }


  _createProfesor2(profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.urlLaravel + "crearProfesor", JSON.stringify(profesor), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _createProfesor(data) {
    return this.http.post(this.urlLaravel + "crearProfesor", data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _filtrarProfesor(query) {
    return this.http.post(this.urlLaravel + "filtrarProfesor?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.___filtrarProfesor.next(r.datol);
    });
  }



  _eliminarProfesor(id) {
    return this.http.delete<Profesor>(this.urlLaravel + "eliminarProfesor" + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _matriculaEstudiateProfesor(id,id2): Observable<IProfesor> {
    return this.http.get<IProfesor>(this.urlLaravel + "matriculaEstudiateProfesor" + '/' + id + '/' + id2)
      .pipe(
        catchError(this.errorHandler)
      )
  }

/*   _listarNota2(id, id2): Observable<Nota> {
    return this.http.get<Nota>(this.urlLaravel + "listarNota2" + '/' + id + '/' + id2)
      .pipe(
        catchError(this.errorHandler)
      )
  } */

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
  _historialProfesores(): Observable<IProfesor[]> {
    return this.http.get<IProfesor[]>(this.urlLaravel + "historialProfesores")
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
