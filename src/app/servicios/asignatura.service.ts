import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAsignatura } from '@modelos/iasignatura';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private urlLaravel = environment.baseLaravel;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }




  _listarNivelAsignatura(event) {
    return this.http.post(this.urlLaravel + "listarNivelAsignatura", event, {
    });
  }


  _listarAsignatura(): Observable<IAsignatura[]> {
    return this.http.get<IAsignatura[]>(this.urlLaravel + "asignatura")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarAsignaturaPorId(id: number): Observable<IAsignatura> {
    return this.http.get<IAsignatura>(this.urlLaravel + "asignatura" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarAsignaturaPorId2(id: number): Observable<IAsignatura[]> {
    return this.http.get<IAsignatura[]>(this.urlLaravel + "materia" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _cargarMateria(event) {
    return this.http.post(this.urlLaravel + "materia", event, {
    });
  }

 
  _cargarNivelH(event) {
    return this.http.post(this.urlLaravel + "nivelasgh", event, {
    });
  }

  _cargarNivelM(event) {
    return this.http.post(this.urlLaravel + "nivelasgm", event, {
    });
  }


  _cargarTrimestre2(event) {
    return this.http.post(this.urlLaravel + "trimes2", event, {
    });
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
