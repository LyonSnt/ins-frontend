import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsProfeGuard implements CanActivate {

  constructor(
    private _servicioLogin: LoginService,
    private ruteador: Router
  ) { }
  canActivate(): boolean {
    if (this._servicioLogin.IsAdmin() == 2) {
      return true;
    } else {
      this.ruteador.navigateByUrl('/');
      return false;
    }


  }

}
