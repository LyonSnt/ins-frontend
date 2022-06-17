import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarEstudianteComponent },
  { path: 'listar', component: ListarEstudianteComponent, data: {titulo: 'Lista Estudiante'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
