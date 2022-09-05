import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    CalendarModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),

    //ES PARA EL MENSAJE
    ToastrModule.forRoot({
      preventDuplicates: true,
      // positionClass: 'toast-top-center',


    }),

    SharedModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())

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
