import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from '@layout/estructura/estructura.component';
import { LoginFormComponent } from '@modulos/login/login-form/login-form.component';
import { LoginComponent } from '@modulos/login/login.component';


import { LoginGuard } from './guards/login.guard';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  {
    path: 'login', component: LoginComponent,
    children: [
      {
        path: 'logine', component: LoginFormComponent
      }
    ]
  },
  {
    //esta parte es para que se visualice lo que esta en estructura en el app component
    path: 'panel',
    component: EstructuraComponent, canActivate: [LoginGuard],
    children: [
      {
        path: 'comunidad',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/comunidad/comunidad.module').then((m) => m.ComunidadModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'sexo',
        loadChildren: () =>
          import('@modulos/sexo/sexo.module').then((m1) => m1.SexoModule)
      }
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
