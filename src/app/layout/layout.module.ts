import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstructuraComponent } from './estructura/estructura.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { LeftNavMenuComponent } from './left-nav/left-nav-menu/left-nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    EstructuraComponent,
    FooterComponent,
    HeaderComponent,
    LeftNavComponent,
    LeftNavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,       //hay que importar esto para que funcione el router outlet
    FontAwesomeModule  //agregado el 17-05-2022
  ]
})
export class LayoutModule { }
