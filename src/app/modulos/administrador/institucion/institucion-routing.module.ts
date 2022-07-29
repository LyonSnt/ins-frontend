import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarlistarInstitucionComponent } from './agregarlistar-institucion/agregarlistar-institucion.component';
import { VistaInstitucionComponent } from './vista-institucion/vista-institucion.component';

const routes: Routes = [
  { path: 'listar', component: AgregarlistarInstitucionComponent, data: {titulo: 'Institución'} },
 /*   { path: 'editar/:id', component: editari, data: {titulo: 'Editar Institución'} }, */
   { path: 'vista/:id', component: VistaInstitucionComponent, data: {titulo: 'Vista Institución'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class InstitucionRoutingModule { }
