import { InicioModule } from './inicio/inicio.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicoModule } from './publico/publico.module';
import { LayoutModule } from '@layout/layout.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulosModule } from '@modulos/modulos.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    //Esto hace que los componentes se vayan a publico module
    PublicoModule,
    RouterModule,
    InicioModule,
    LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
     // positionClass: 'toast-top-center',
    }),
    ModulosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
