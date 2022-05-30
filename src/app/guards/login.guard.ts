import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 // token: any;
  constructor(private ruteador: Router,
    private _servicioLogin: LoginService) { }
  /*  canActivate(): any {
     this.token = localStorage.getItem('token');
     if (this.token) {
       return true;
     } else {
       this.ruteador.navigateByUrl('login')
     }

   } */

  canActivate() {
    if (this._servicioLogin.IsLogged()) {  //es lo mismo que el de arriba solo que el islogedt esta en otro lado
      return true;
    } else {
      this.ruteador.navigateByUrl('login');
      return false;
    }


  }

}
