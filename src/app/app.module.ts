import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NopageadmFoundComponent } from './nopage-found/nopageadm-found/nopageadm-found.component';
import { NopageprfFoundComponent } from './nopage-found/nopageprf-found/nopageprf-found.component';
import { NopageestFoundComponent } from './nopage-found/nopageest-found/nopageest-found.component';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ListarSexoComponent } from '@modulos/sexo/listar-sexo/listar-sexo.component';
import { EditarSexoComponent } from '@modulos/sexo/editar-sexo/editar-sexo.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@NgModule({
  declarations: [
    AppComponent,
    NopageadmFoundComponent,
    NopageprfFoundComponent,
    NopageestFoundComponent,
    ListarSexoComponent,
    EditarSexoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,

    //ES PARA EL MENSAJE
    ToastrModule.forRoot({
      preventDuplicates: true,
      // positionClass: 'toast-top-center',


    }),

    SharedModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule

  ],
  providers: [
    {
      provide: LocationStrategy,    //CON ESTO QUITAMOS EL GATO DE ANGULAR QUE APARECE AL PRINCIPIO
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
