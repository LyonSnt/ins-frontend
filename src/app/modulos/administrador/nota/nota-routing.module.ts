import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';

const routes: Routes = [

  { path: 'agregar', component: AgregarNotaComponent,data: {titulo: 'Agregar Nota'} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class NotaRoutingModule { }
