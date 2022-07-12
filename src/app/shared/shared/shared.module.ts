import { EstudianteestModule } from './../../modulos/estudiante/estudianteest.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { InicioModule } from 'app/inicio/inicio.module';
import { ModulosModule } from '@modulos/modulos.module';
import { EstadocivilModule } from '@modulos/estadocivil/estadocivil.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComunidadModule } from '@modulos/administrador/comunidad/comunidad.module';
import { LayoutprfModule } from '@layout/layoutprf/layoutprf.module';
import { LoginModule } from '@modulos/login/login.module';
import { EstudianteModule } from '@modulos/administrador/estudiante/estudiante.module';
import { SexoModule } from '@modulos/administrador/sexo/sexo.module';
import { LayoutbaseModule } from '@layout/layoutbase/layoutbase.module';
import { LayoutestModule } from '@layout/layoutest/layoutest.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfesorprfModule } from '@modulos/profesor/profesorprf.module';
import { MatriculaModule } from '@modulos/administrador/matricula/matricula.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    LayoutModule,
    ModulosModule,
    HttpClientModule,

    /*   //PARTE DEL ADMINISTRADOR
      ComunidadModule,
      EstadocivilModule,
      EstudianteModule,
      SexoModule,

      //PARTE DEL PROFESOR
      ProfesorprfModule,

      //PARTE DEL ESTUDIANTE
      EstudianteestModule, */

    ReactiveFormsModule,
    // LAYOUTS
    LayoutbaseModule,
    LayoutprfModule,
    LayoutestModule,


    //LOGIN
    LoginModule,


  ],
  exports: [
    CommonModule,
    InicioModule,
    LayoutModule,
    ModulosModule,
    /*  //ADMINISTRADOR
     ModulosModule,
     ComunidadModule,
     EstadocivilModule,
     SexoModule,
     MatriculaModule,

      //PARTE DEL PROFESOR
      ProfesorprfModule,

     //PARTE DEL ESTUDIANTE
     EstudianteestModule, */


    ReactiveFormsModule,
    // LAYOUTS
    LayoutbaseModule,
    LayoutprfModule,
    LayoutestModule,
    //LOGIN
    LoginModule
  ]
})
export class SharedModule { }


