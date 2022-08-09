import { TranslateModule } from '@ngx-translate/core';
import { NotaModule } from './administrador/nota/nota.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '@modulos/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComunidadModule } from './administrador/comunidad/comunidad.module';
import { EstadocivilModule } from './administrador/estadocivil/estadocivil.module';
import { SexoModule } from './administrador/sexo/sexo.module';
import { MatriculaModule } from './administrador/matricula/matricula.module';
import { ProfesorprfModule } from './profesor/profesorprf.module';
import { EstudianteestModule } from './estudiante/estudianteest.module';
import { NivelModule } from './administrador/nivel/nivel.module';
import { AgregarSexoComponent } from './sexo/agregar-sexo/agregar-sexo.component';
import { ProfesorModule } from './administrador/profesor/profesor.module';



@NgModule({
  declarations: [
    LoginComponent,
    AgregarSexoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    //ADMINISTRADOR
    ComunidadModule, //
    EstadocivilModule,
    SexoModule,
    MatriculaModule,
    NivelModule,
    NotaModule,
    ProfesorModule,
  


    //PARTE DEL PROFESOR
    ProfesorprfModule,

    //PARTE DEL ESTUDIANTE
    EstudianteestModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    //ADMINISTRADOR
    ComunidadModule,
    EstadocivilModule,
    SexoModule,
    MatriculaModule,
    NivelModule,
    NotaModule,
    ProfesorModule,

    //PARTE DEL PROFESOR
    ProfesorprfModule,

    //PARTE DEL ESTUDIANTE
    EstudianteestModule,
  ]
})
export class ModulosModule { }
