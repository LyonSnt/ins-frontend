import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@layout/layout.module';
import { HeaderAdm1Component } from './header-adm1/header-adm1.component';
import { SidebarAdm1Component } from './sidebar-adm1/sidebar-adm1.component';
import { BreadcrumbsAdm1Component } from './breadcrumbs-adm1/breadcrumbs-adm1.component';
import { FooterAdm1Component } from './footer-adm1/footer-adm1.component';
import { EstructuraAdm1Component } from './estructura-adm1/estructura-adm1.component';



@NgModule({
  declarations: [
    HeaderAdm1Component,
    SidebarAdm1Component,
    BreadcrumbsAdm1Component,
    FooterAdm1Component,
    EstructuraAdm1Component
  ],
  imports: [
    LayoutModule,     /* ESTO TRAER MODULOS GENERALES */


  ],
  exports: [
    LayoutModule,     /* ESTO TRAER MODULOS GENERALES */
    
  ]
})
export class LayoutbaseModule { }
