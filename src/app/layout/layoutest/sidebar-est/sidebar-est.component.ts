import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { SidebarService } from '@servicios/sidebar.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-sidebar-est',
  templateUrl: './sidebar-est.component.html',
  styleUrls: ['./sidebar-est.component.scss']
})
export class SidebarEstComponent implements OnInit {

  user: any;
  dashboardEst: any[];
  perfilEst: any[];
  resgisacademicoEst: any[];
  notasEst: any[];
  menuItemsEst: any[];
  menuItems3: any[];
  userData: any;
  token: any;
  menuItems12: any;
  data2: any;
  cerrarSesion: any;
  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';
  private urlLaravel = environment.baseLaravel;
  constructor(
    private _sidebarServicio: SidebarService,
    private ruteador: Router,
    private _servicioLogin: LoginService,
    private http: HttpClient
  ) {

    this.dashboardEst = this._sidebarServicio.dashboardEst;
    this.perfilEst = this._sidebarServicio.perfilEst;
    this.resgisacademicoEst = this._sidebarServicio.resgisacademicoEst;
    this.notasEst = this._sidebarServicio.notasEst;


    this.menuItemsEst = this._sidebarServicio.menuEstudiante;
    this.cerrarSesion = this._sidebarServicio._cerarSesion;

  }

  ngOnInit(): void {
  /*   const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get(this.urlLaravel + "acceso", { headers: headers }).subscribe(r => {
      this.data2 = r;
    });
    console.log("DATA2", this.data2); */

    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token); //ES PARA EXTRAER LOS NOMBRES

  }
}
