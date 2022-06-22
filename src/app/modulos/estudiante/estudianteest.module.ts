import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEstComponent } from './dashboard-est/dashboard-est.component';
import { PerfilEstComponent } from './perfil-est/perfil-est.component';
import { EstudianteestRoutingModule } from './estudianteest-routing.module';
import { RegistroacademicoEstComponent } from './registroacademico-est/registroacademico-est.component';
import { NotasEstComponent } from './notas-est/notas-est.component';



@NgModule({
  declarations: [
    DashboardEstComponent,
    PerfilEstComponent,
    RegistroacademicoEstComponent,
    NotasEstComponent
  ],
  imports: [
    CommonModule,
    EstudianteestRoutingModule,    //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE

  ]
})
export class EstudianteestModule { }
