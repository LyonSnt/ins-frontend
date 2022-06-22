import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstructuraEstComponent } from './estructura-est/estructura-est.component';
import { FooterEstComponent } from './footer-est/footer-est.component';
import { HeaderEstComponent } from './header-est/header-est.component';
import { SidebarEstComponent } from './sidebar-est/sidebar-est.component';
import { BreadcrumbsEstComponent } from './breadcrumbs-est/breadcrumbs-est.component';
import { LayoutModule } from '@layout/layout.module';



@NgModule({
  declarations: [
    EstructuraEstComponent,
    FooterEstComponent,
    HeaderEstComponent,
    SidebarEstComponent,
    BreadcrumbsEstComponent
  ],
  imports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */


  ],
  exports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */
  ]
})
export class LayoutestModule { }
