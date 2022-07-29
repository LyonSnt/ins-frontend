import { MatricularMatriculaComponent } from './matricular-matricula/matricular-matricula.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMatriculaComponent } from './agregar-matricula/agregar-matricula.component';
import { ImprimirMatriculaComponent } from './imprimir-matricula/imprimir-matricula.component';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { LegalizarMatriculaComponent } from './legalizar-matricula/legalizar-matricula.component';
import { ListarlegalizarMatriculaComponent } from './listarlegalizar-matricula/listarlegalizar-matricula.component';
import { ListarmatricularMatriculaComponent } from './listarmatricular-matricula/listarmatricular-matricula.component';

const routes: Routes = [
  { path: 'agregar/:id', component: AgregarMatriculaComponent, data: {titulo: 'Agregar Matricula'} },
  { path: 'listar', component: ListarMatriculaComponent, data: {titulo: 'Lista Matricula'} },
  { path: 'imp2022::', component: ImprimirMatriculaComponent, data: {titulo: 'Imprimir Matricula'} },
  { path: 'legalizar/:id', component: LegalizarMatriculaComponent, data: {titulo: 'Legalizar Matricula legalizar'} },
  { path: 'listaLegalizar', component: ListarlegalizarMatriculaComponent, data: {titulo: 'Legalizar Matricula Lista'} },
  { path: 'listamatricular', component: ListarmatricularMatriculaComponent, data: {titulo: 'Lista Matricular'} },
  { path: 'matricular/:id', component: MatricularMatriculaComponent, data: {titulo: 'Matricular'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
