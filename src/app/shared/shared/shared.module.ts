import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { InicioModule } from 'app/inicio/inicio.module';
import { ModulosModule } from '@modulos/modulos.module';
import { ComunidadModule } from '@modulos/comunidad/comunidad.module';
import { EstadocivilModule } from '@modulos/estadocivil/estadocivil.module';
import { SexoModule } from '@modulos/sexo/sexo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    LayoutModule,
    ModulosModule,
    ComunidadModule,
    EstadocivilModule,
    SexoModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    InicioModule,
    LayoutModule,
    ModulosModule,
    ComunidadModule,
    EstadocivilModule,
    SexoModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }


