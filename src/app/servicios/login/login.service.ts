import { Router } from '@angular/router';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '@modelos/ilogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLaravel = environment.baseLaravel;

  constructor(
    private http: HttpClient,
    private ruteador: Router) { }


  crear(rv2: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(this.urlLaravel + "login", rv2)
  }

  login(data: any) {
    return this.http.post(this.urlLaravel + "login", data);
  }


  listarPrueba11(): Observable<ILogin[]> {
    return this.http.get<ILogin[]>(this.urlLaravel + "login");

  }

  remove() {
    localStorage.removeItem('token');
    return this.ruteador.navigateByUrl('login');
  }
}
