import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoComponent } from './publico.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicoModule { }
