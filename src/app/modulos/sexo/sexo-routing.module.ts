import { EditarSexoComponent } from './editar-sexo/editar-sexo.component';
import { AgregarSexoComponent } from './agregar-sexo/agregar-sexo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSexoComponent } from './listar-sexo/listar-sexo.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarSexoComponent },
  { path: 'listar', component: ListarSexoComponent },
  { path: 'editar/:id', component: EditarSexoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class SexoRoutingModule { }


/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class _RoutingModule { } */
