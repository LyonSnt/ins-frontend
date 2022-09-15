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
      titulo: 'Proceso Académico',
      icono: 'nav-icon fas fa-book',
      submenu: [
        { titulo: 'Estudiante', url: 'estu/listar', icono: 'fas fa-user-graduate' },
        { titulo: 'Profesor', url: 'prof/listar', icono: 'fas fa-chalkboard-teacher' },
        { titulo: 'Matricular', url: 'matr/listamatricular', icono: 'fas fa-school' },
        { titulo: 'Matriculados', url: 'matr/listar', icono: 'fas fa-clipboard-list' },
        { titulo: 'Nota', url: 'nota/agregar', icono: 'fas fa-book-open' }
      ]
    }
  ];

  menuAdmin2: any[] = [
    {
      titulo: 'Administrativo',
      icono: 'nav-icon fas fa-swatchbook',
      submenu: [
        { titulo: 'Institucion', url: 'inst/listar', icono: 'fas fa-university' },
        { titulo: 'Cargo', url: 'cargo/listar', icono: 'fas fa-suitcase' },
        { titulo: 'Año', url: 'aniocade/listar', icono: 'fas fa-braille' },
        { titulo: 'Iglesia', url: 'igle/listar', icono: 'fas fa-church' },
      ]
    }
  ];

  menuAdmin3: any[] = [
    {
      titulo: 'Reporte',
      icono: 'nav-icon fas fa-clipboard',
      submenu: [
        { titulo: 'Rep1', url: 'institucion/listar', icono: 'fa fa-users' },
        { titulo: 'Rep2', url: 'cargo/listar', icono: 'fa fa-cubes' },
        { titulo: 'Rep3', url: 'aniocade/listar', icono: 'fa fa-cubes' },

      ]
    }
  ];


  menuAdmin4: any[] = [
    {
      titulo: 'Administrar Estudiante',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Estudiante', url: 'estu/listar', icono: 'fa fa-users' },
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
      url: 'view::/perfil'
    }
  ];


  menuProfe: any[] = [{
    titulo: 'Administrar2',
    icono: 'nav-icon fas fa-swatchbook',
    submenu: [
      { titulo: 'Matriculados', url: 'view::/matriculados', icono: 'fa fa-users' },
    /*   { titulo: 'Asistencia', url: 'view::/notas', icono: 'fa fa-cubes' }, */
     /*  { titulo: 'Asistencia', url: 'usuarios', icono: 'fa fa-cubes' } */
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
      url: 'view::/perfil'
    }
  ];

  resgisacademicoEst: any = [
    {
      titulo: 'Registro Academico',
      icono: 'fas fa-book',
      url: 'view::/regacademico'
    }
  ];

  notasEst: any = [
    {
      titulo: 'Notas',
      icono: 'fas fa-book-open',
      url: 'view::/notas'
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
