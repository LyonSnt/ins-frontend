import { Estudiante2 } from './../modelos/estudiante2.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstudiante } from '@modelos/iestudiante';
import { environment } from 'environments/environment.prod';
import { catchError, Observable, throwError, BehaviorSubject, Subject, tap } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private urlLaravel = environment.baseLaravel;

/*   allestudent = new BehaviorSubject<Estudiante2[]>(null!);
  allestudent2 = new BehaviorSubject<Estudiante2[]>(null!); */
  ___filtrarEstudiante = new BehaviorSubject<Estudiante2[]>(null!);
  ___filtrarMatriculaEstudiante = new BehaviorSubject<Estudiante2[]>(null!);

  modeloUltimoDato = new BehaviorSubject<Estudiante2[]>(null!);

  private _refresh$ = new Subject<void>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient,
    private _servicioLogin: LoginService
  ) {

    this._filtrarEstudiante("");
    this._filtrarMatricularEstudiante("");
    this._ultimodato();
 /*    if (this._servicioLogin.IsAdmin() == 'Administrador') {
     // this._estudianteH("");
     this._filtrarEstudiante("");
      this._ultimodato();
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
     // this._estudianteM("");
    }
 */

  }

  _crearEstudiante(data) {
    return this.http.post(this.urlLaravel + "crearEstudiante", data)
      .pipe(
        tap(() => {
          this._refresh$.next();
        }),
        catchError(this.errorHandler)
      );;
  }

  _filtrarEstudiante(query) {
    return this.http.post(this.urlLaravel + "filtrarEstudiante?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.___filtrarEstudiante.next(r.data);
    });
  }

  _buscarEstudiantePorId2(id): Observable<Estudiante2> {
    return this.http.get<Estudiante2>(this.urlLaravel + "buscarEstudiantePorId" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  _buscarEstudiantePorId(id): Observable<IEstudiante> { //ESTO REVISAR Y QUITAR SI NO ES NECESARIO
    return this.http.get<IEstudiante>(this.urlLaravel + "estudiante" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  _filtrarMatricularEstudiante(query) {
    return this.http.post(this.urlLaravel + "filtrarMatricularEstudiante?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.___filtrarMatriculaEstudiante.next(r.data);
    });
  }
 /*  _estudianteH(query) {
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
  } */



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

  _listar(): Observable<any> {
    return this.http.get(this.urlLaravel + "estudiante");
  }



  _buscarEstudiante2PorId(id): Observable<IEstudiante> {
    return this.http.get<IEstudiante>(this.urlLaravel + "estudiante2" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  get refresh() {
    return this._refresh$;
  }

  _editarEstudiante(id, estudiante: Estudiante2): Observable<Estudiante2> {
    return this.http.put<Estudiante2>(this.urlLaravel + "actualizarEstudiante" + '/' + id, JSON.stringify(estudiante), this.httpOptions)
      .pipe(
        tap(() => {
          this._refresh$.next(); //SUSPUESTA MENTE ERA PARA QUE RECARGUE LA PAGINA
        }),
        catchError(this.errorHandler)
      );
  }

  _eliminarEstudiante(id) {
    return this.http.delete<Estudiante2>(this.urlLaravel + "eliminarEstudiante" + '/' + id, this.httpOptions)
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
