import { InicioModule } from './inicio/inicio.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructuraComponent } from './layout/estructura/estructura.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicoModule } from './publico/publico.module';

@NgModule({
  declarations: [
    AppComponent,
    //Componentes
    EstructuraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    //Esto hace que los componentes se vayan a publico module
    PublicoModule,
    RouterModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
