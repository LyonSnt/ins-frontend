import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarlistarIglesiaComponent } from './agregarlistar-iglesia/agregarlistar-iglesia.component';
import { VistaIglesiaComponent } from './vista-iglesia/vista-iglesia.component';

const routes: Routes = [
  { path: 'listar', component: AgregarlistarIglesiaComponent, data: {titulo: 'Iglesia'} },
  { path: 'vista/:id', component: VistaIglesiaComponent, data: {titulo: 'Vista Iglesia'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class IglesiaRoutingModule { }
