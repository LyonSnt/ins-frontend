import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '@modelos/ilogin';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLaravel = environment.baseLaravel;

  datos: any = {};
  token: any;
  userData: any;
  constructor(
    private http: HttpClient,
    private ruteador: Router) {

  }

  crear(rv2: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(this.urlLaravel + "login", rv2)
  }

  login(usuario: ILogin) {
    return this.http.post(this.urlLaravel + "login", usuario);
  }


  listarPrueba11(): Observable<ILogin[]> {
    return this.http.get<ILogin[]>(this.urlLaravel + "login");

  }

  remove() {
    localStorage.removeItem('token');
    return this.ruteador.navigateByUrl('/');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  IsLogged() {
    return localStorage.getItem("token") != null;
  }

  IsAdmin() {
    this.datos = localStorage.getItem("id_rol");
    console.log("Rol en services", this.datos);
    return this.datos;

  }

  IsAdmint(){
    this.datos = JSON.parse(JSON.stringify(localStorage.getItem('token')));
    console.log("Rol en services", this.datos.id_rol);

 /*    const decoded = jwt_decode(this.datos);

    console.log("DCODOG¿FICADOR", decoded); */

    return this.datos.id_rol;

  }

  IsAdmin23(token: string): void {
    const decode = jwt_decode<ILogin>(token);
    localStorage.setItem('token', token);
    localStorage.setItem('id_rol', JSON.stringify(decode.id_rol));
  }

}
