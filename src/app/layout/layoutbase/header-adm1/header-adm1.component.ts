import { TranslateService } from '@ngx-translate/core';
import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { SidebarService } from '@servicios/sidebar.service';

@Component({
  selector: 'app-header-adm1',
  templateUrl: './header-adm1.component.html',
  styleUrls: ['./header-adm1.component.scss']
})
export class HeaderAdm1Component implements OnInit {
  token: any;
  userData: any;
  constructor(
    private _sidebarServicio: SidebarService,
    private ruteador: Router,
    private _servicioLogin: LoginService,
    public _traductorServicio: TranslateService
  ) { 
    _traductorServicio.addLangs(['es', 'ki']);
    _traductorServicio.setDefaultLang('es');
  }

  ngOnInit(): void {

  }
  traductor(idioma: string) {
    this._traductorServicio.use(idioma);
  }

  logout() {
    this._servicioLogin.remove();
  }

  
}
