import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarlistarComunidadComponent } from './agregarlistar-comunidad/agregarlistar-comunidad.component';

const routes: Routes = [
  { path: 'agregar', component: AgregarlistarComunidadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class ComunidadRoutingModule { }
//
