import { FilterPipe } from './listar-estudiante/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    ListarEstudianteComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,    //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE
    ReactiveFormsModule,
    NgbPaginationModule,


  ]
})
export class EstudianteModule { }
