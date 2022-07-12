import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '@modulos/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ComunidadModule } from './administrador/comunidad/comunidad.module';
import { EstadocivilModule } from './administrador/estadocivil/estadocivil.module';
import { SexoModule } from './administrador/sexo/sexo.module';
import { MatriculaModule } from './administrador/matricula/matricula.module';
import { ProfesorprfModule } from './profesor/profesorprf.module';
import { EstudianteestModule } from './estudiante/estudianteest.module';
import { NivelModule } from './administrador/nivel/nivel.module';
import { AgregarSexoComponent } from './sexo/agregar-sexo/agregar-sexo.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    AgregarSexoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    //ADMINISTRADOR
    ComunidadModule,
    EstadocivilModule,
    SexoModule,
    MatriculaModule,
    NivelModule,

    //PARTE DEL PROFESOR
    ProfesorprfModule,

    //PARTE DEL ESTUDIANTE
    EstudianteestModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    //ADMINISTRADOR
    ComunidadModule,
    EstadocivilModule,
    SexoModule,
    MatriculaModule,
    NivelModule,

    //PARTE DEL PROFESOR
    ProfesorprfModule,

    //PARTE DEL ESTUDIANTE
    EstudianteestModule,
  ]
})
export class ModulosModule { }
