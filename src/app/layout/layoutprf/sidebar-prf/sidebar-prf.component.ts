import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@servicios/sidebar.service';
import { LoginService } from '@servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-prf',
  templateUrl: './sidebar-prf.component.html',
  styleUrls: ['./sidebar-prf.component.scss']
})
export class SidebarPrfComponent implements OnInit {

  token: any;
  dashboardProf: any[];
  perfilProfesor: any[];
  /*   dashboardProf: any[];
    dashboardProf: any[];
    dashboardProf: any[]; */
  
    directorio: any = 'http://127.0.0.1:8000/storage/img_profesor/';
  menuItemsProf: any[];
  menuItems3: any[];
  userData: any;

  menuItems12: any;

  cerrarSesion: any;

  constructor(
    private _sidebarServicio: SidebarService,
    private ruteador: Router,
    private _servicioLogin: LoginService,
  ) {

    this.dashboardProf = this._sidebarServicio.dashboardProfe;
    this.perfilProfesor = this._sidebarServicio.perfiProfesor;
    this.menuItemsProf = this._sidebarServicio.menuProfe;
    this.cerrarSesion = this._sidebarServicio._cerarSesion;

  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA FOTO GRANDE
    console.log("FOTO", this.userData.foto);

  }

  logout() {
    this._servicioLogin.remove();
  }


  navegarDashboard() {
    this.ruteador.navigateByUrl('admin/dashboard');
  }

}
