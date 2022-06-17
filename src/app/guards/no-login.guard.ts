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
    const expectedRole = next.data.roleparaentrar;

    const token = localStorage.getItem('token');
   const rol = localStorage.getItem('rol');
    const tokenPayload = decode(token!);
    const usuarioActual = this._servicioLogin.IsLogged;

    console.log('GUARD NO LOGIN', tokenPayload);
    console.log('ROLES', rol);
    console.log('token', token);

    if (usuarioActual()) {
      this.ruteador.navigate(['/admin'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
    return true;
  }
}

