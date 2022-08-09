import { AdministradorModule } from './../administrador.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { AgregarProfesorComponent } from './agregar-profesor/agregar-profesor.component';
import { ListarProfesorComponent } from './listar-profesor/listar-profesor.component';
import { EditarProfesorComponent } from './editar-profesor/editar-profesor.component';
import { VistaProfesorComponent } from './vista-profesor/vista-profesor.component';


@NgModule({
  declarations: [
    AgregarProfesorComponent,
    ListarProfesorComponent,
    EditarProfesorComponent,
    VistaProfesorComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    AdministradorModule
  ]
})
export class ProfesorModule { }
