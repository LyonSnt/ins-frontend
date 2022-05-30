import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ILeftNavMenu } from '@modelos/ileft-nav-menu.metadata';
import { LoginService } from '@servicios/login.service';
import { LEFT_NAV_MENUS } from './left-nav-menu/left-nav-menu.const';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit{
  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public nombre = 'Leonel Santacruz';
  public posicion = 'Gerente';
  public avatar = 'assets/images/defaults/avatar5.png'
  public logo = 'assets/images/defaults/lo2.png'
  public menus: ILeftNavMenu[] = LEFT_NAV_MENUS;
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
  /*  console.log(this.token);
   console.log(this.userData.name); */
  }


}
