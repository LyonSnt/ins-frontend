import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
