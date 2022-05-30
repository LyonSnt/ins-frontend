import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComunidadComponent } from './agregar-comunidad/agregar-comunidad.component';
import { ComunidadRoutingModule } from './comunidad-routing.module';
import { ListarComunidadComponent } from './listar-comunidad/listar-comunidad.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarComunidadComponent,
    ListarComunidadComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComunidadModule { }
