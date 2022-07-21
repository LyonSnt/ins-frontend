import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '@modelos/ilogin';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLaravel = environment.baseLaravel;

  datos: any = {};

  constructor(
    private http: HttpClient,
    private ruteador: Router) {

  }

  _login(usuario: ILogin) {
    return this.http.post(this.urlLaravel + "login", usuario);
  }

  IsAdmin() {
    this.datos = localStorage.getItem("id_rol");
   // console.log("Rol en services", this.datos);
    return this.datos;
  }

  remove() {
    localStorage.removeItem('token');
    return this.ruteador.navigateByUrl('/');
  }

  IsLogged() {
    return localStorage.getItem("token") != null;
  }

/*
  logout() {
    return this.http.post(this.urlLaravel + "cerrarSesion", null);
  }
  getToken() {
    return localStorage.getItem('token');
  }
 */

}
