import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComunidadComponent } from './agregar-comunidad/agregar-comunidad.component';
import { ListarComunidadComponent } from './listar-comunidad/listar-comunidad.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarComunidadComponent },
  { path: 'listar', component: ListarComunidadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class ComunidadRoutingModule { }

