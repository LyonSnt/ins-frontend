import { EstructuraAdm1Component } from './layout/layoutbase/estructura-adm1/estructura-adm1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraPrfComponent } from '@layout/layoutprf/estructura-prf/estructura-prf.component';
import { LoginComponent } from '@modulos/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { InicioComponent } from './inicio/inicio.component';
import { IsProfeGuard } from './guards/is-profe.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: EstructuraAdm1Component, canActivate: [LoginGuard],
/*     component: EstructuraAdmComponent, canActivate: [LoginGuard, IsAdminGuard], */
    children: [
      {
        path: 'comunidad',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/comunidad/comunidad.module').then((m) => m.ComunidadModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'estudiante',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/estudiante/estudiante.module').then((m) => m.EstudianteModule) //carga todos los modulos cuando esten ya listas
      }
    ]
  },
  { path: 'prof', component: EstructuraPrfComponent, canActivate: [LoginGuard, IsProfeGuard] },
  {
    path: '**', // toda esta parte es para que cuando se ponga una ruta que no exista nos redirija a panel user
    redirectTo: '/', //hay que poner a la vista que tiene que ir por defecto
    pathMatch: 'full'
  }

];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { useHash: true })], //EL USEHASH ES PARA QUE QUITE EL GATO INICIAL DE ANGULAR AL MOMENTO DE AGREGAR LA RUTA
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
