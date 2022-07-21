import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaestudiantePrfComponent } from './listaestudiante-prf/listaestudiante-prf.component';
import { PerfilPrfComponent } from './perfil-prf/perfil-prf.component';


const routes: Routes = [
  { path: 'perfil', component: PerfilPrfComponent, data: {titulo: 'Perfil'} },
  { path: 'matriculados', component: ListaestudiantePrfComponent, data: {titulo: 'Matriculados'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class ProfesorprfRoutingModule { }
