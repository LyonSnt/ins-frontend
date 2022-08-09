import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@servicios/sidebar.service';
import { LoginService } from '@servicios/login.service';

@Component({
  selector: 'app-sidebar-adm1',
  templateUrl: './sidebar-adm1.component.html',
  styleUrls: ['./sidebar-adm1.component.scss']
})
export class SidebarAdm1Component implements OnInit {

  token: any;
  menuItems1: any[];
  menuItems2: any[];
  menuItems3: any[];
  menuItems4: any[];
  userData: any;

  menuItems12: any;

  cerrarSesion: any;

  constructor(
    private _sidebarServicio: SidebarService,
    private ruteador: Router,
    private _servicioLogin: LoginService,
  ) {

    this.menuItems12 = this._sidebarServicio.dashboard;
    this.menuItems1 = this._sidebarServicio.menuAdmin1;
    this.menuItems2 = this._sidebarServicio.menuAdmin2;
    this.menuItems3 = this._sidebarServicio.menuAdmin3;

    this.cerrarSesion = this._sidebarServicio._cerarSesion;

  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA FOTO GRANDE


  }

  logout() {
    this._servicioLogin.remove();
  }


  navegarDashboard() {
    this.ruteador.navigateByUrl('admin/dashboard');
  }

}
