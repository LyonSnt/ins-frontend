import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { NotaRoutingModule } from './nota-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministradorModule } from '../administrador.module';
//import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AgregarNotaComponent
  ],
  imports: [
    CommonModule,
    NotaRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AdministradorModule
  ]
})
export class NotaModule { }
