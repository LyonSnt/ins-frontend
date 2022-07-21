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
  modeloUltimoDato = new BehaviorSubject<Estudiante2[]>(null!);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient,
    private _servicioLogin: LoginService
    ) {


    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this._estudianteH("");
      this._ultimodato();
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this._estudianteM("");
    }


  }

  _estudianteH(query) {
    return this.http.post(this.urlLaravel + "estudianteH?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.allestudent.next(r.data);
    });
  }

  _estudianteM(query) {
    return this.http.post(this.urlLaravel + "estudianteM?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.allestudent2.next(r.data);
    });
  }

  _crearEstudiante(data) {
    return this.http.post(this.urlLaravel + "crearEstudiante", data, {
    });
  }

  _ultimodato(): Observable<Estudiante2[]> {
    return this.http.get<Estudiante2[]>(this.urlLaravel + "ultimoDatoEstudiante")
      .pipe(
        catchError(this.errorHandler)
      )
  }
  _ultimodatoOriginal() {
    return this.http.get(this.urlLaravel + "ultimoDatoEstudiante").subscribe(res => {
      var r: any = res;
      this.modeloUltimoDato.next(r.datoDesdeLaravel);
      // console.log("In services:", this.modeloUltimoDato.value);
    });
  }


  _listarEstudianteH(): Observable<IEstudiante[]> {
    return this.http.get<IEstudiante[]>(this.urlLaravel + "estudiante")
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

  _buscarEstudiante2PorId(id): Observable<IEstudiante> {
    return this.http.get<IEstudiante>(this.urlLaravel + "estudiante2" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _editarEstudiante(id: number, estudiante: IEstudiante): Observable<IEstudiante> {
    return this.http.put<IEstudiante>(this.urlLaravel + "actualizarEstudiante" + '/' + id, JSON.stringify(estudiante), this.httpOptions)
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
