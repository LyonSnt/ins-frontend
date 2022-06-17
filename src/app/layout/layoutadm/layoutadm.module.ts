import { LayoutModule } from '@layout/layout.module';
import { NgModule } from '@angular/core';
import { EstructuraAdmComponent } from './estructura-adm/estructura-adm.component';
import { FooterAdmComponent } from './footer-adm/footer-adm.component';
import { HeaderAdmComponent } from './header-adm/header-adm.component';
import { LeftNavAdmComponent } from './left-nav-adm/left-nav-adm.component';
import { LeftNavMenuAdmComponent } from './left-nav-adm/left-nav-menu-adm/left-nav-menu-adm.component';


@NgModule({
  declarations: [
    EstructuraAdmComponent,
    FooterAdmComponent,
    HeaderAdmComponent,
    LeftNavAdmComponent,
    LeftNavMenuAdmComponent
  ],
  imports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */

  ],
  exports: [
    LayoutModule     /* ESTO TRAER MODULOS GENERALES */
  ]
})
export class LayoutadmModule { }
