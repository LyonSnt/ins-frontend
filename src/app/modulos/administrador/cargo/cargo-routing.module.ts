import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarlistarCargoComponent } from './agregarlistar-cargo/agregarlistar-cargo.component';

const routes: Routes = [
  { path: 'listar', component: AgregarlistarCargoComponent, data: {titulo: 'Cargo'} },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class CargoRoutingModule { }
