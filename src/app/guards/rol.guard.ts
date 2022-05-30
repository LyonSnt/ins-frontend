import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  canActivate() {
    let rol = localStorage.getItem('userType');
    if (rol == "admin") {
      return true;
    }
    alert('no tiene permisos de admin');
    return false;
  }

}
