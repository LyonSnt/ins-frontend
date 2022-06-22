import { NgModule } from '@angular/core';
import { EstructuraPrfComponent } from './estructura-prf/estructura-prf.component';
import { FooterPrfComponent } from './footer-prf/footer-prf.component';
import { HeaderPrfComponent } from './header-prf/header-prf.component';
import { LayoutModule } from '@layout/layout.module';
import { SidebarPrfComponent } from './sidebar-prf/sidebar-prf.component';
import { BreadcrumbsPrfComponent } from './breadcrumbs-prf/breadcrumbs-prf.component';



@NgModule({
  declarations: [
    EstructuraPrfComponent,
    FooterPrfComponent,
    HeaderPrfComponent,
    SidebarPrfComponent,
    BreadcrumbsPrfComponent
  ],
  imports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */


  ],
  exports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */
  ]
})
export class LayoutprfModule { }
