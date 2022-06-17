import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginadmComponent } from './loginadm/loginadm.component';
import { LayoutModule } from '@layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LoginadmComponent
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
