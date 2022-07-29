import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnioacademicoRoutingModule } from './anioacademico-routing.module';
import { AgregarlistarAnioacademicoComponent } from './agregarlistar-anioacademico/agregarlistar-anioacademico.component';
import { AdministradorModule } from '../administrador.module';



@NgModule({
  declarations: [
    AgregarlistarAnioacademicoComponent
  ],
  imports: [
    CommonModule,
    AnioacademicoRoutingModule,
    AdministradorModule
  ]
})
export class AnioacademicoModule { }
