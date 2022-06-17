import { NgModule } from '@angular/core';
import { EstructuraPrfComponent } from './estructura-prf/estructura-prf.component';
import { FooterPrfComponent } from './footer-prf/footer-prf.component';
import { HeaderPrfComponent } from './header-prf/header-prf.component';
import { LeftNavPrfComponent } from './left-nav-prf/left-nav-prf.component';
import { LeftNavMenuPrfComponent } from './left-nav-prf/left-nav-menu-prf/left-nav-menu-prf.component';
import { LayoutModule } from '@layout/layout.module';



@NgModule({
  declarations: [
    EstructuraPrfComponent,
    FooterPrfComponent,
    HeaderPrfComponent,
    LeftNavPrfComponent,
    LeftNavMenuPrfComponent
  ],
  imports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */


  ],
  exports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */
  ]
})
export class LayoutprfModule { }
