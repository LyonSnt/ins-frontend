/* import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  token: any;
  userData: any;
  constructor() {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.esAutorizado(route);
  }

  private esAutorizado(route: ActivatedRouteSnapshot): boolean {
    const roles = ['Administrador','Profesor'];
    const expectedRoles = route.data.expectedRoles;
    const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
    return roleMatches < 0 ? false : true;
  }

}
 */
