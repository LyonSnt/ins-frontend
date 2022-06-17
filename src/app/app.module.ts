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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      // positionClass: 'toast-top-center',


    }),

    SharedModule,
    NgbModule,

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
