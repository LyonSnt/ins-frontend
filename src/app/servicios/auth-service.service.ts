import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLogin = false;

   roleAs: string;

  constructor() { }

  login(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('token', 'true');
    localStorage.setItem('role', this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('token', 'false');
    localStorage.setItem('role', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('token');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

   getRole(): any {
    this.roleAs = localStorage.getItem('token')!;
    return this.roleAs;
  }

}
/*  */
