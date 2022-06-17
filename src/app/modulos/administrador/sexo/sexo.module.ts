import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexoRoutingModule } from './sexo-routing.module';
import { AgregarlistarSexoComponent } from './agregarlistar-sexo/agregarlistar-sexo.component';
import { EditarSexoComponent } from './editar-sexo/editar-sexo.component';



@NgModule({
  declarations: [
    AgregarlistarSexoComponent,
    EditarSexoComponent
  ],
  imports: [
    CommonModule,
    SexoRoutingModule
  ]
})
export class SexoModule { }
