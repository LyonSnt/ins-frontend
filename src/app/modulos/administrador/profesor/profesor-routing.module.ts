import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProfesorComponent } from './agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './editar-profesor/editar-profesor.component';
import { ListarProfesorComponent } from './listar-profesor/listar-profesor.component';
import { VistaProfesorComponent } from './vista-profesor/vista-profesor.component';


const routes: Routes = [
  { path: 'agregar', component: AgregarProfesorComponent, data: {titulo: 'Agregar Profesor'} },
  { path: 'listar', component: ListarProfesorComponent, data: {titulo: 'Lista Profesor'} },
  { path: 'editar/:id', component: EditarProfesorComponent, data: {titulo: 'Editar Profesor'} },
  { path: 'vista/:id', component: VistaProfesorComponent, data: {titulo: 'Vista Profesor'} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
