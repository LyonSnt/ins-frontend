import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPrfComponent } from './dashboard-prf/dashboard-prf.component';
import { PerfilPrfComponent } from './perfil-prf/perfil-prf.component';
import { ProfesorprfRoutingModule } from './profesorprf-routing.module';
import { ListaestudiantePrfComponent } from './listaestudiante-prf/listaestudiante-prf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VernotasPrfComponent } from './vernotas-prf/vernotas-prf.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    DashboardPrfComponent,
    PerfilPrfComponent,
    ListaestudiantePrfComponent,
    VernotasPrfComponent
  ],
  imports: [
    CommonModule,
    ProfesorprfRoutingModule,     //AQUI IMPORTAMOS PARA QUE LA RUTA SE HABILITE Y FUNCIONE.
    ReactiveFormsModule,
    TableModule
  ]
})
export class ProfesorprfModule { }
