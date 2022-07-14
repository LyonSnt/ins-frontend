import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarNotaComponent } from './agregar-nota/agregar-nota.component';
import { NotaRoutingModule } from './nota-routing.module';




@NgModule({
  declarations: [
    AgregarNotaComponent
  ],
  imports: [
    CommonModule,
    NotaRoutingModule
  ]
})
export class NotaModule { }
