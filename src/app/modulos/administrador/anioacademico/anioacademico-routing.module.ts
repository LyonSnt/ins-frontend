import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarlistarAnioacademicoComponent } from './agregarlistar-anioacademico/agregarlistar-anioacademico.component';

const routes: Routes = [
  { path: 'listar', component: AgregarlistarAnioacademicoComponent, data: {titulo: 'Año academico'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class AnioacademicoRoutingModule { }
