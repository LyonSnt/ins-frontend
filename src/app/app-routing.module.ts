

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from '@layout/estructura/estructura.component';
import { InicioComponent } from './inicio/inicio.component';
import { PublicoComponent } from './publico/publico.component';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent,
    children: [
     /*  { path: 'inicio', component: CarouselComponent } */
    ]
  },
  { path: 'estructura', component: EstructuraComponent },
  {
    path: 'publico',
    component: PublicoComponent,
    children: [
       { path: 'inicio', component: InicioComponent }
    ]
  }

];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { useHash: true })], //EL USEHASH ES PARA QUE QUITE EL GATO INICIAL DE ANGULAR AL MOMENTO DE AGREGAR LA RUTA
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
