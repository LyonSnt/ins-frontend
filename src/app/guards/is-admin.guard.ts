import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(
    private _servicioLogin: LoginService,
    private ruteador: Router
  ) { }
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._servicioLogin.IsAdmin() == 1) {
      return true;
    } else {
      this.ruteador.navigate(['/admin'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }


  }

}
