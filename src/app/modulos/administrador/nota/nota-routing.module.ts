import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { ListarNotaComponent } from './listar-nota/listar-nota.component';

const routes: Routes = [

  { path: 'agregar', component: AgregarNotaComponent,data: {titulo: 'Agregar Nota'} },
  { path: 'view/:id', component: ListarNotaComponent, data: {titulo: 'Notas'} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class NotaRoutingModule { }
