import jwt_decode from 'jwt-decode';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ILeftNavMenu } from '@modelos/ileft-nav-menu.metadata';
import { LoginService } from '@servicios/login.service';
import { LEFT_NAV_MENUS_PRF } from './left-nav-menu-prf/left-nav-menu.prf.const';

@Component({
  selector: 'app-left-nav-prf',
  templateUrl: './left-nav-prf.component.html',
  styleUrls: ['./left-nav-prf.component.scss']
})
export class LeftNavPrfComponent implements OnInit {
  @Output() dataPara: ILeftNavMenu;

  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public nombre = 'Leonel Santacruz cachimuel';
  public posicion = 'Gerente de faceboook';
  public avatar = 'assets/images/defaults/avatar5.png'
  public logo = 'assets/images/defaults/lo2.png'


  public menus: ILeftNavMenu[] = LEFT_NAV_MENUS_PRF

  public logoutMenu: ILeftNavMenu;

  token: any;
  userData: any;
  constructor(
    private _servicioLogin: LoginService,
    private ruteador: Router
  ) {
    this.logoutMenu = {
      titulo: '',
      links: [
        {
          icon: faTimes,
          nombre: 'Cerrar Session',
          metodo: () => this._servicioLogin.remove()
        }
      ]

    };

  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    /*    console.log(this.token); */


    console.log('Desde el Backend: ', this.userData);

    console.log('Desde el Backend: ', this.userData.name);
    console.log('Desde el Backend: ', this.userData.email);
    console.log('Desde el Backend: ', this.userData.rol);
  }


}

