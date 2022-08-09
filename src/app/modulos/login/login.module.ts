import { TranslateModule } from '@ngx-translate/core';
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
    TranslateModule

  ],
  exports: [
    LayoutModule,
    ReactiveFormsModule,
    TranslateModule

  ]
})
export class LoginModule { }
