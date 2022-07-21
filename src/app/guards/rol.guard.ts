/* import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '@servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  token: any;
  userData: any;
  constructor (
    private ruteador: Router,
    private _servicioLogin: LoginService
  ) {
    this.token = localStorage.getItem('token');
      this.userData = jwt_decode(this.token);

  }

  canActivate2() {

    if (this.userData == "Administrador") {
      return true;
    }
    alert('no tiene permisos de admin');
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._servicioLogin.IsLogged()) {  //es lo mismo que el de arriba solo que el islogedt esta en otro lado
      return true;

    } else {
      this.ruteador.navigate(['login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
  }


}
 */
