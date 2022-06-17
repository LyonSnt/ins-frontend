import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadocivilRoutingModule } from './estadocivil-routing.module';
import { AgregarlistarEstadocivilComponent } from './agregarlistar-estadocivil/agregarlistar-estadocivil.component';
import { EditarEstadocivilComponent } from './editar-estadocivil/editar-estadocivil.component';



@NgModule({
  declarations: [
    AgregarlistarEstadocivilComponent,
    EditarEstadocivilComponent
  ],
  imports: [
    CommonModule,
    EstadocivilRoutingModule
  ]
})
export class EstadocivilModule { }
