import { AdministradorModule } from './../administrador.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarlistarComunidadComponent } from './agregarlistar-comunidad/agregarlistar-comunidad.component';
import { ComunidadRoutingModule } from './comunidad-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AgregarlistarComunidadComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule,
    AdministradorModule,     //ES ESTA PARTE IMPORTAMOS TODO LO QUE SE QUIERA INCORPORAR EN LAS DEMAS CARPETAS
    NgxPaginationModule
  ]
})
export class ComunidadModule { }
