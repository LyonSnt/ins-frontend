import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPrfComponent } from './perfil-prf/perfil-prf.component';


const routes: Routes = [
  { path: 'perfil', component: PerfilPrfComponent, data: {titulo: 'Perfil'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class ProfesorprfRoutingModule { }
