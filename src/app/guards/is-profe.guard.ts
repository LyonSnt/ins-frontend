import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsProfeGuard implements CanActivate {

  constructor(
    private _servicioLogin: LoginService,
    private ruteador: Router,
    private toastr: ToastrService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._servicioLogin.IsAdmin() == 'Profesor') {
      return true;
    } else {
      this.toastr.error(JSON.stringify('No tiene permiso'),
      JSON.stringify('ERROR'), {
      timeOut: 4000,
      progressBar: true
    });
    this.ruteador.navigate(['nopage2']);
      return false;
    }


  }

}
