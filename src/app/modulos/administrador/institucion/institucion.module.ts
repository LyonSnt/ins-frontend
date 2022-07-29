import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionRoutingModule } from './institucion-routing.module';
import { AgregarlistarInstitucionComponent } from './agregarlistar-institucion/agregarlistar-institucion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdministradorModule } from '../administrador.module';
import { VistaInstitucionComponent } from './vista-institucion/vista-institucion.component';



@NgModule({
  declarations: [
    AgregarlistarInstitucionComponent,
    VistaInstitucionComponent
  ],
  imports: [
    CommonModule,
    InstitucionRoutingModule,
    AdministradorModule,     //ES ESTA PARTE IMPORTAMOS TODO LO QUE SE QUIERA INCORPORAR EN LAS DEMAS CARPETAS
    NgxPaginationModule
  ]
})
export class InstitucionModule { }
