import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

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
      titulo: 'Administrar Categoria',
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

  menuProfe: any[] = [{
    titulo: 'Dashboard',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users' },
      { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
      { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' }
    ]
  }];

  menuEstudiante: any[] = [{
    titulo: 'Dashboard',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users' },
      { titulo: 'Productos', url: 'usuarios', icono: 'fa fa-cubes' },
      { titulo: 'Categoria', url: 'usuarios', icono: 'fa fa-cubes' }
    ]
  }]

}
