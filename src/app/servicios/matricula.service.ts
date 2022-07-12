import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMatricula } from '@modelos/imatricula';
import { Matricula } from '@modelos/matricula.model';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private urlLaravel = environment.baseLaravel;
  modeloMatricula = new BehaviorSubject<Matricula[]>(null!);
  modeloMatricula2 = new BehaviorSubject<Matricula[]>(null!);
  modeloMatriculaH = new BehaviorSubject<Matricula[]>(null!);
  modeloMatriculaM = new BehaviorSubject<Matricula[]>(null!);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {

    this._buscarmatriculaH("");
    this._buscarmatriculaM("");
  }

  _createMatricula(matricula): Observable<IMatricula> {
    return this.http.post<IMatricula>(this.urlLaravel + "matricula", JSON.stringify(matricula), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  _createMatricula2(rv2: IMatricula): Observable<IMatricula> {
    return this.http.post<IMatricula>(this.urlLaravel+"matricula", rv2)
  }
  _listarMatriculaH(): Observable<IMatricula[]> {
    return this.http.get<IMatricula[]>(this.urlLaravel + "matricula")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarMatriculaPorId(id): Observable<IMatricula> {
    return this.http.get<IMatricula>(this.urlLaravel + "matricula" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarmatricula(query) {
    return this.http.post(this.urlLaravel + "buscarmatricula?buscar="+query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatricula2.next(r.data);
    });
  }

  _buscarmatricula2() {
    return this.http.get(this.urlLaravel + "buscarmatricula2");
  }

  _buscarmatriculaH(query) {
    return this.http.post(this.urlLaravel + "buscarmatriculaH?buscar="+query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatriculaH.next(r.data);
    });
  }
  _buscarmatriculaM(query) {
    return this.http.post(this.urlLaravel + "buscarmatriculaM?buscar="+query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatriculaM.next(r.data);
    });
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
