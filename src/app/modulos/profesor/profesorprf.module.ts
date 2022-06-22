import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrfComponent } from './dashboard-prf/dashboard-prf.component';
import { PerfilPrfComponent } from './perfil-prf/perfil-prf.component';
import { ProfesorprfRoutingModule } from './profesorprf-routing.module';



@NgModule({
  declarations: [
    DashboardPrfComponent,
    PerfilPrfComponent
  ],
  imports: [
    CommonModule,
    ProfesorprfRoutingModule     //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE
  ]
})
export class ProfesorprfModule { }
