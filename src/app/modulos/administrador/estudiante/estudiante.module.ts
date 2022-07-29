import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ListarEstudianteComponent } from './listar-estudiante/listar-estudiante.component';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { CalendarModule } from 'primeng/calendar';
import { AdministradorModule } from '../administrador.module';
import { VistaEstudianteComponent } from './vista-estudiante/vista-estudiante.component';



@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    ListarEstudianteComponent,
    EditarEstudianteComponent,
    VistaEstudianteComponent,
  ],
  imports: [
    CommonModule,
    EstudianteRoutingModule,    //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE
    ReactiveFormsModule,
    NgbPaginationModule,
    NgxPaginationModule,
    FormsModule,
    CalendarModule,
    AdministradorModule



  ]
})
export class EstudianteModule { }
