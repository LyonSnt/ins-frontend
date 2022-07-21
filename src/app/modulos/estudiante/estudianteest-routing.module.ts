import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasEstComponent } from './notas-est/notas-est.component';
import { PerfilEstComponent } from './perfil-est/perfil-est.component';
import { RegistroacademicoEstComponent } from './registroacademico-est/registroacademico-est.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'perfil', component: PerfilEstComponent, data: { titulo: 'Perfil' } },
      { path: 'regacademico', component: RegistroacademicoEstComponent, data: { titulo: 'Registro Academico' } },
      { path: 'notas', component: NotasEstComponent, data: { titulo: 'Notas' } },
      { path: '**', redirectTo: 'est/est2022::/perfil' }

    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class EstudianteestRoutingModule { }
