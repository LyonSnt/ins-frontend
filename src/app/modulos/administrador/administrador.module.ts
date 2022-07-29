import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { BooleanInput } from '@angular/cdk/coercion';
import {PaginatorModule} from 'primeng/paginator';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    TableModule,
    PaginatorModule,
    MessagesModule,
    MessageModule,
    CardModule,
    PanelModule,
    PasswordModule,



  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    TableModule,
    PaginatorModule,
    MessagesModule,
    MessageModule,
    CardModule,
    PanelModule,
    PasswordModule,


  ]
})
export class AdministradorModule { }
