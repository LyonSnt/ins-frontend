import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    RouterModule,       //hay que importar esto para que funcione el router outlet
    FontAwesomeModule,  //agregado el 17-05-2022
    MenubarModule,


  ],
  exports: [
    CommonModule,
    RouterModule,       //hay que importar esto para que funcione el router outlet
    FontAwesomeModule,  //agregado el 17-05-2022
    MenubarModule,

  ]
})
export class LayoutModule { }
/*  */
