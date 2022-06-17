import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    ListarEstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,    //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE
    ReactiveFormsModule
  ]
})
export class EstudianteModule { }
