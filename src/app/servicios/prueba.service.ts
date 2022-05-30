
import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

/*  private urlLaravel = environment.baseLaravel;

  constructor(private http: HttpClient) { }


  listarPrueba11(): Observable<IPrueba[]> {
    return this.http.get<IPrueba[]>(this.urlLaravel+"prueba");
  }

  crear(rv2: IPrueba): Observable<IPrueba> {
    return this.http.post<IPrueba>(this.urlLaravel+"prueba", rv2)
  }

  actualizar(rv: IPrueba): Observable<IPrueba> {
    return this.http.put<IPrueba>(this.urlLaravel+"prueba", rv)
  }

  eleiminar(rv: number): Observable<void> {
    return this.http.delete<void>(`${this.urlLaravel}prueba/${rv}`)
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.urlLaravel}prueba/${id}`)
  } */

}

