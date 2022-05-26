import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  token: any;
  constructor(private ruteador: Router) { }
  canActivate(): any {
    this.token = localStorage.getItem('token');
    if (this.token) {
      return true;
    } else {
      this.ruteador.navigateByUrl('login')
    }

  }

}
