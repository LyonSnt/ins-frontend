import { EstructuraAdm1Component } from './layout/layoutbase/estructura-adm1/estructura-adm1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraPrfComponent } from '@layout/layoutprf/estructura-prf/estructura-prf.component';
import { LoginComponent } from '@modulos/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { InicioComponent } from './inicio/inicio.component';
import { IsProfeGuard } from './guards/is-profe.guard';
import { DashboardComponent } from '@modulos/administrador/dashboard/dashboard.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { DashboardPrfComponent } from '@modulos/profesor/dashboard-prf/dashboard-prf.component';
import { EstructuraEstComponent } from '@layout/layoutest/estructura-est/estructura-est.component';
import { IsEstuGuard } from './guards/is-estu.guard';
import { DashboardEstComponent } from '@modulos/estudiante/dashboard-est/dashboard-est.component';
import { NopageadmFoundComponent } from './nopage-found/nopageadm-found/nopageadm-found.component';
import { NopageprfFoundComponent } from './nopage-found/nopageprf-found/nopageprf-found.component';
import { NopageestFoundComponent } from './nopage-found/nopageest-found/nopageest-found.component';
import { AgregarSexoComponent } from '@modulos/sexo/agregar-sexo/agregar-sexo.component';
import { ListarSexoComponent } from '@modulos/sexo/listar-sexo/listar-sexo.component';
import { EditarSexoComponent } from '@modulos/sexo/editar-sexo/editar-sexo.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nopage1', component: NopageadmFoundComponent },
  { path: 'nopage2', component: NopageprfFoundComponent },
  { path: 'nopage3', component: NopageestFoundComponent },
  { path: 'sexo', component: AgregarSexoComponent },
  { path: 'listar/:id', component: ListarSexoComponent },
  { path: 'editar/:id', component: EditarSexoComponent },

/*   {
    path: 'admin2',
   // component: AdminLayoutComponent, canActivate: [LoginGuard, IsAdminGuard],
  },
 */
  {
    path: 'admin',
    component: EstructuraAdm1Component, canActivate: [LoginGuard, IsAdminGuard],
    /*     component: EstructuraAdmComponent, canActivate: [LoginGuard, IsAdminGuard], */
    children: [
      /*  { path: 'nopage1', component: NopageadmFoundComponent },
       { path: 'nopage2', component: NopageprfFoundComponent },
       { path: 'nopage3', component: NopageestFoundComponent }, */
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      {
        path: 'inst',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/institucion/institucion.module').then((m) => m.InstitucionModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'cargo',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/cargo/cargo.module').then((m) => m.CargoModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'aniocade',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/anioacademico/anioacademico.module').then((m) => m.AnioacademicoModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'igle',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/iglesia/iglesia.module').then((m) => m.IglesiaModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'estu',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/estudiante/estudiante.module').then((m) => m.EstudianteModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'matr',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/matricula/matricula.module').then((m) => m.MatriculaModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'nota',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/nota/nota.module').then((m) => m.NotaModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'prof',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/profesor/profesor.module').then((m) => m.ProfesorModule) //carga todos los modulos cuando esten ya listas
      },
      {
        path: 'comu',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/administrador/comunidad/comunidad.module').then((m) => m.ComunidadModule) //carga todos los modulos cuando esten ya listas
      }
    ]
  },
  {
    path: 'prof', component: EstructuraPrfComponent, canActivate: [LoginGuard, IsProfeGuard],

    children: [
      /*   { path: 'nopage2', component: NopageprfFoundComponent }, */
      { path: 'dashboard', component: DashboardPrfComponent, data: { titulo: 'Dashboard' } },

      {
        path: 'view::',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/profesor/profesorprf.module').then((m) => m.ProfesorprfModule) //carga todos los modulos cuando esten ya listas
      },
      /*   {
          path: 'estudiante',
          loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
            import('@modulos/administrador/estudiante/estudiante.module').then((m) => m.EstudianteModule) //carga todos los modulos cuando esten ya listas
        } */
    ]

  },
  {
    path: 'est', component: EstructuraEstComponent, canActivate: [LoginGuard, IsEstuGuard],

    children: [
      /*  { path: 'nopage3', component: NopageestFoundComponent }, */
      { path: 'dashboard', component: DashboardEstComponent, data: { titulo: 'Dashboard' } },

      {
        path: 'view::',
        loadChildren: () => //esto hace que se cargue la informacion como se vaya necesitando
          import('@modulos/estudiante/estudianteest.module').then((m) => m.EstudianteestModule) //carga todos los modulos cuando esten ya listas
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
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
