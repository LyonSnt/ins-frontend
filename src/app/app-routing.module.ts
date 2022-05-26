

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from '@layout/estructura/estructura.component';
import { LoginComponent } from '@modulos/login/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { VigilanteGuard } from './guards/vigilante.guard';
import { InicioComponent } from './inicio/inicio.component';
import { PublicoComponent } from './publico/publico.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: InicioComponent,
    children: [
      /*  { path: 'inicio', component: CarouselComponent } */
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: EstructuraComponent, canActivate: [LoginGuard]},
  {
    path: 'publico',
    component: PublicoComponent, canActivate: [LoginGuard],
    children: [
      { path: 'inicio', component: InicioComponent }
    ]
  },
  {
    path: '**', // toda esta parte es para que cuando se ponga una ruta que no exista nos redirija a panel user
    redirectTo: '/', //hay que poner a la vista que tiene que ir por defecto
    pathMatch: 'full'
  }

];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { useHash: true })], //EL USEHASH ES PARA QUE QUITE EL GATO INICIAL DE ANGULAR AL MOMENTO DE AGREGAR LA RUTA
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
