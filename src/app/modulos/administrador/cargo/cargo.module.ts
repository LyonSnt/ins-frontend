import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarlistarCargoComponent } from './agregarlistar-cargo/agregarlistar-cargo.component';
import { EditarCargoComponent } from './editar-cargo/editar-cargo.component';



@NgModule({
  declarations: [
    AgregarlistarCargoComponent,
    EditarCargoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CargoModule { }
