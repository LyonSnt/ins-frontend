import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';



@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    ListarEstudianteComponent,
    EditarEstudianteComponent,
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,    //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE
    ReactiveFormsModule,
    NgbPaginationModule,
    NgxPaginationModule,


  ]
})
export class EstudianteModule { }
