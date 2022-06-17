import decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { Observable } from 'rxjs';
import { AuthServiceService } from '@servicios/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceGuard implements CanActivate {
  token: any;
  userData: any;
  constructor(public _auth: LoginService, public router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /*   JSON.stringify(this.data2.code)
      const expectedRole = route.data.expectedRole;
      const token = localStorage.getItem('token');
     const tokenPayload = decode(token!);
     // const userData = JSON.parse(JSON.stringify(localStorage.getItem("rol")));

     const userData = JSON.parse(localStorage.getItem('token')!);

      if (!this._auth.IsLogged() || tokenPayload.rol !== expectedRole) {
        this.router.navigate(['/logadm']);
        return false;
      }
      return true; */
      return true;
  }

}
