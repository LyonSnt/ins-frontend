import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IglesiaRoutingModule } from './iglesia-routing.module';
import { AdministradorModule } from '../administrador.module';
import { AgregarlistarIglesiaComponent } from './agregarlistar-iglesia/agregarlistar-iglesia.component';
import { VistaIglesiaComponent } from './vista-iglesia/vista-iglesia.component';



@NgModule({
  declarations: [
    AgregarlistarIglesiaComponent,
    VistaIglesiaComponent
  ],
  imports: [
    CommonModule,
    IglesiaRoutingModule,
    AdministradorModule
  ]
})
export class IglesiaModule { }
