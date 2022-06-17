import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '@servicios/login.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor( private _servicioLogin: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //const torken: string = this._servicioLogin
    return next.handle(request);
  }
}
