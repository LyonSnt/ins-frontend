import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { AgregarMatriculaComponent } from './agregar-matricula/agregar-matricula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';



@NgModule({
  declarations: [
    AgregarMatriculaComponent,
    ListarMatriculaComponent
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    ReactiveFormsModule
  ]
})
export class MatriculaModule { }
