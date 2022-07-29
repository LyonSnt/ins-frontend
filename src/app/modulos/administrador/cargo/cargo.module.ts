import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarlistarCargoComponent } from './agregarlistar-cargo/agregarlistar-cargo.component';
import { CargoRoutingModule } from './cargo-routing.module';
import { AdministradorModule } from '../administrador.module';




@NgModule({
  declarations: [
    AgregarlistarCargoComponent,


  ],
  imports: [
    CommonModule,
    CargoRoutingModule,
    AdministradorModule
  ]
})
export class CargoModule { }
