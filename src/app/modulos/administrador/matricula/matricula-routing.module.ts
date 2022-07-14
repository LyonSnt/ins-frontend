import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMatriculaComponent } from './agregar-matricula/agregar-matricula.component';
import { ImprimirMatriculaComponent } from './imprimir-matricula/imprimir-matricula.component';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';

const routes: Routes = [
  { path: 'agregar/:id', component: AgregarMatriculaComponent, data: {titulo: 'Agregar Matricula'} },
  { path: 'listar', component: ListarMatriculaComponent, data: {titulo: 'Lista Matricula'} },
  { path: 'imp2022::', component: ImprimirMatriculaComponent, data: {titulo: 'Imprimir Matricula'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
