import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { AgregarMatriculaComponent } from './agregar-matricula/agregar-matricula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImprimirMatriculaComponent } from './imprimir-matricula/imprimir-matricula.component';




@NgModule({
  declarations: [
    AgregarMatriculaComponent,
    ListarMatriculaComponent,
    ImprimirMatriculaComponent
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    

  ]
})
export class MatriculaModule { }
