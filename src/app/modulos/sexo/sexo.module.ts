import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarSexoComponent } from './agregar-sexo/agregar-sexo.component';
import { ListarSexoComponent } from './listar-sexo/listar-sexo.component';
import { SexoRoutingModule } from './sexo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarSexoComponent } from './editar-sexo/editar-sexo.component';



@NgModule({
  declarations: [
    AgregarSexoComponent,
    ListarSexoComponent,
    EditarSexoComponent
  ],
  imports: [
    CommonModule,
    SexoRoutingModule,
    ReactiveFormsModule
  ]
})
export class SexoModule { }
