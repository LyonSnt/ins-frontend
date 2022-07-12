import { Estudiante2 } from './../modelos/estudiante2.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstudiante } from '@modelos/iestudiante';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError, BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private urlLaravel = environment.baseLaravel;

  allestudent = new BehaviorSubject<Estudiante2[]>(null!);
  allestudent2 = new BehaviorSubject<Estudiante2[]>(null!);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,
    private _servicioLogin: LoginService) {


    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this._leer3("");
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this._leer4("");
   }
  }


  _leer(query = '') {
    return this.http.get(this.urlLaravel + "estudiante" + '/' + { params: { buscar: query } })
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _leer3(query) {
    return this.http.post(this.urlLaravel + "estudianteH?buscar="+query, null).subscribe(res => {
      var r: any = res;
      this.allestudent.next(r.data);
    });
  }


  _leer4(query) {
    return this.http.post(this.urlLaravel + "estudianteM?buscar="+query, null).subscribe(res => {
      var r: any = res;
      this.allestudent2.next(r.data);
    });
  }


  _createEstudiante(estudiante): Observable<IEstudiante> {
    return this.http.post<IEstudiante>(this.urlLaravel + "estudiante", JSON.stringify(estudiante), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  uploadData(data) {
    const headers = new HttpHeaders();
    return this.http.post(this.urlLaravel + "file", data, {
      headers: headers
    });
  }

  _listarEstudianteH(): Observable<IEstudiante[]> {
    return this.http.get<IEstudiante[]>(this.urlLaravel + "estudiante")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _listarEstudianteM(): Observable<IEstudiante[]> {
    return this.http.get<IEstudiante[]>(this.urlLaravel + "estudiantem")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarEstudiantePorId(id): Observable<IEstudiante> {
    return this.http.get<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _listarEstudiante2H(): Observable<IEstudiante[]> {
    return this.http.get<IEstudiante[]>(this.urlLaravel + "estudiante2")
      .pipe(
        catchError(this.errorHandler)
      )
  }
  _buscarEstudiante2PorId(id): Observable<IEstudiante> {
    return this.http.get<IEstudiante>(this.urlLaravel + "estudiante2" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _editar(id: number, estudiante: IEstudiante): Observable<IEstudiante> {
    return this.http.put<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id, JSON.stringify(estudiante), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _eliminar(id: number) {
    return this.http.delete<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id, this.httpOptions)
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
