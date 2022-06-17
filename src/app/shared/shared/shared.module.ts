import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { InicioModule } from 'app/inicio/inicio.module';
import { ModulosModule } from '@modulos/modulos.module';
import { EstadocivilModule } from '@modulos/estadocivil/estadocivil.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunidadModule } from '@modulos/administrador/comunidad/comunidad.module';
import { LayoutadmModule } from '@layout/layoutadm/layoutadm.module';
import { LayoutprfModule } from '@layout/layoutprf/layoutprf.module';
import { LoginModule } from '@modulos/login/login.module';
import { EstudianteModule } from '@modulos/administrador/estudiante/estudiante.module';
import { SexoModule } from '@modulos/administrador/sexo/sexo.module';
import { LayoutbaseModule } from '@layout/layoutbase/layoutbase.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    LayoutModule,
    ModulosModule,

    //PARTE DEL ADMINISTRADOR
    ComunidadModule,
    EstadocivilModule,
    EstudianteModule,
    SexoModule,



    ReactiveFormsModule,
    // LAYOUTS
    LayoutadmModule,
    LayoutprfModule,
    LayoutbaseModule,

    //LOGIN
    LoginModule
  ],
  exports: [
    CommonModule,
    InicioModule,
    LayoutModule,

    //ADMINISTRADOR
    ModulosModule,
    ComunidadModule,
    EstadocivilModule,
    SexoModule,

    ReactiveFormsModule,
    // LAYOUTS
    LayoutadmModule,
    LayoutprfModule,
    LayoutbaseModule,
    //LOGIN
    LoginModule
  ]
})
export class SharedModule { }


