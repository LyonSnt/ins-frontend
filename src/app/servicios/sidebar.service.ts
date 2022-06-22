import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private _loginServicio: LoginService) { }

  dashboard: any = [
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      url: 'dashboard'
    }
  ];

  _cerarSesion: any = [
    {
      titulo: 'Cerrar Sesión',
      icono: 'nav-icon fas fa-sign-out-alt',
      metodo: () => this._loginServicio.remove()
    }
  ];

  menuAdmin1: any[] = [
    {
      titulo: 'Matricula',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Estudiante', url: 'estudiante/listar', icono: 'fa fa-users' },
        { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' }
      ]
    }
  ];

  menuAdmin2: any[] = [
    {
      titulo: 'Administrar',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Iglesia', url: 'estudiante/listar', icono: 'fa fa-users' },
        { titulo: 'Cargo', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Año', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Cargo', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Año', url: 'usuarios', icono: 'fa fa-cubes' }
      ]
    }
  ];

  menuAdmin3: any[] = [
    {
      titulo: 'Administrar Estudiante',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Estudiante', url: 'estudiante/listar', icono: 'fa fa-users' },
        { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
        { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' }
      ]
    }
  ];

  /* MENU PROFESOR */

  dashboardProfe: any = [
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      url: 'dashboard'
    }
  ];

  perfiProfesor: any = [
    {
      titulo: 'Perfil',
      icono: 'fas fa-user-graduate',
      url: 'prf2022::/perfil'
    }
  ];


  menuProfe: any[] = [{
    titulo: 'Administrar',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users' },
      { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
      { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' }
    ]
  }];





  /* MENU ESTUDIANTE */

  dashboardEst: any = [
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      url: 'dashboard'
    }
  ];

  perfilEst: any = [
    {
      titulo: 'Perfil',
      icono: 'fas fa-user-graduate',
      url: 'est2022::/perfil'
    }
  ];

  resgisacademicoEst: any = [
    {
      titulo: 'Registro Academico',
      icono: 'fas fa-book',
      url: 'est2022::/regacademico'
    }
  ];

  notasEst: any = [
    {
      titulo: 'Notas',
      icono: 'fas fa-book-open',
      url: 'est2022::/notas'
    }
  ];
  menuEstudiante: any[] = [{
    titulo: 'Notas',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Notas', url: 'notas', icono: 'fa fa-users' },

    ]
  }]

}
