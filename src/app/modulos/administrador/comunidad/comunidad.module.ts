import { AdministradorModule } from './../administrador.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarlistarComunidadComponent } from './agregarlistar-comunidad/agregarlistar-comunidad.component';



@NgModule({
  declarations: [
    AgregarlistarComunidadComponent
  ],
  imports: [
    CommonModule,
    AdministradorModule     //ES ESTA PARTE IMPORTAMOS TODO LO QUE SE QUIERA INCORPORAR EN LAS DEMAS CARPETAS
  ]
})
export class ComunidadModule { }
