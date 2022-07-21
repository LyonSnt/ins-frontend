import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,

  ],
  exports: [
    LayoutModule,
    ReactiveFormsModule,

  ]
})
export class LoginModule { }
