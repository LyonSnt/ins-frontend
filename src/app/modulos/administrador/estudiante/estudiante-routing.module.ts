import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';
import { VistaEstudianteComponent } from './vista-estudiante/vista-estudiante.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarEstudianteComponent },
  { path: 'listar', component: ListarEstudianteComponent, data: {titulo: 'Lista Estudiante'} },
  { path: 'editar/:id', component: EditarEstudianteComponent, data: {titulo: 'Editar Estudiante'} },
  { path: 'vista/:id', component: VistaEstudianteComponent, data: {titulo: 'Vista Estudiante'} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
