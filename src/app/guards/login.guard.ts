import { ROLES_ENUM } from 'app/enum/roles.enum';
import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '@servicios/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  token: any;
  userData: any;
  constructor(private ruteador: Router,
    private _servicioLogin: LoginService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._servicioLogin.IsLogged()) {  //es lo mismo que el de arriba solo que el islogedt esta en otro lado
      return true;
    } else {
      this.ruteador.navigate(['/'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
  }

}
