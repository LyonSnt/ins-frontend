import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {

  constructor(private ruteador: Router,
    private _servicioLogin: LoginService) { }

  /* ES PARA REDIRGIR SI EL USUARIO YA ESTA LOGUEADO, SIEMPRE AL PANEL */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const usuarioActual = this._servicioLogin.IsLogged;

    if (usuarioActual()) {
      this.ruteador.navigate(['/admin'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
    return true;
  }
}

