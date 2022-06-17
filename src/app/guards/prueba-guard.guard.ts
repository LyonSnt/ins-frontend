import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtAuthService } from '@servicios/jwt-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaGuardGuard implements CanActivate {
  constructor(private _jwtAuthService: JwtAuthService, private _router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	
		const isLoggedIn = this._jwtAuthService.isLoggedIn();
		if (!isLoggedIn) {
			void this._router.navigateByUrl('/login');
		}
		return isLoggedIn;
	}
}
