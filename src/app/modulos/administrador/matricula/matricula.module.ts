import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaRoutingModule } from './matricula-routing.module';
import { AgregarMatriculaComponent } from './agregar-matricula/agregar-matricula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarMatriculaComponent } from './listar-matricula/listar-matricula.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImprimirMatriculaComponent } from './imprimir-matricula/imprimir-matricula.component';
import { MatricularMatriculaComponent } from './matricular-matricula/matricular-matricula.component';
import { LegalizarMatriculaComponent } from './legalizar-matricula/legalizar-matricula.component';
import { AdministradorModule } from '../administrador.module';
import { ListarlegalizarMatriculaComponent } from './listarlegalizar-matricula/listarlegalizar-matricula.component';
import { ListarmatricularMatriculaComponent } from './listarmatricular-matricula/listarmatricular-matricula.component';
import { AnularMatriculaComponent } from './anular-matricula/anular-matricula.component';




@NgModule({
  declarations: [
    AgregarMatriculaComponent,
    ListarMatriculaComponent,
    ImprimirMatriculaComponent,
    MatricularMatriculaComponent,
    LegalizarMatriculaComponent,
    ListarlegalizarMatriculaComponent,
    ListarmatricularMatriculaComponent,
    AnularMatriculaComponent
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AdministradorModule
    

  ]
})
export class MatriculaModule { }
