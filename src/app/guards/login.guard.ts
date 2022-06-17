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
  /*  canActivate(): any {
     this.token = localStorage.getItem('token');
     this.userData = jwt_decode(this.token);
     if (this.token) {
       if (this.userData.rol === 'Admin' || this.userData.rol === 'User') {
         return true;
       }
     } else {
       this.ruteador.navigateByUrl('login')
     }

   } */


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

/*    canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
   ): boolean {
     const usuarioActual = this._servicioLogin.getUsuario;
     if (usuarioActual) {
       if (next.data.roles && !this._servicioLogin.hasAccessToModule(next.data.roles)) {
         alert('NO tiene permisos');
         return false;
       }
       return true;
     } else {
       this.ruteador.navigate(['login'], {
         queryParams: { returnUrl: state.url }
       });
       return false;
     }
   } */


}
