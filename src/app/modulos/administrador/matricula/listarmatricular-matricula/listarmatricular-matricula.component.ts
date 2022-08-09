import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstudianteService } from '@servicios/estudiante.service';
import { LoginService } from '@servicios/login.service';
import { MatriculaService } from '@servicios/matricula.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listarmatricular-matricula',
  templateUrl: './listarmatricular-matricula.component.html',
  styleUrls: ['./listarmatricular-matricula.component.scss']
})
export class ListarmatricularMatriculaComponent implements OnInit {

  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';
  datos: Estudiante2[];
  datoMatEst: Estudiante2[];
  datosany: any;

  listaParaMatricula: any;

  //datos: Observable<Estudiante2[]>:
  pageactual: number = 1;

  cumple: Date;
  products: any;
  datos2: Estudiante2[] = [];
  totalRecords: number;
  ListadatosAny: any[];
  ListadatosEstudianteAny: any[];

  constructor
    (
      private _servicioEstudiante: EstudianteService,
      private toastr: ToastrService,
      private _servicioLogin: LoginService,
      private ruteador: Router,
      private _matriculaServicio: MatriculaService,
      private activarRuter: ActivatedRoute,
    ) {

  }

  ngOnInit(): void {

    this.cumple = new Date();
   // this.filtrarMatricularEstudiante();
    //this.listarParaMatricular();
    //this.filtrarParaMatricular();
    this.filtrarEstudianteParaMatricular();

  }

  ngAfterViewInit(): void {
   /*  setTimeout(() => {
      this.isLoading = false;
    }, 1000) */

  }
  nuevoEstudiante() {
    //this.ruteador.navigate(['admin/estudiante/agregar']);
    window.location.href = "admin/estudiante/agregar";
  }

/*
  listarParaMatricular() {
    this._matriculaServicio._listarParaMatricular().subscribe(res => {
      this.listaParaMatricula = res;
    console.log("LISTAR PARA MAT", this.listaParaMatricula);
    });
  }
 */

 /*  filtrarParaMatricular() {
    this._matriculaServicio.___filtrarParaMatricular.subscribe(res => {
      this.ListadatosAny = res;
    console.log("DATOS PARA MAT", this.ListadatosAny);
    });
  } */


  filtrarEstudianteParaMatricular() {
    this._matriculaServicio.____filtrarEstudianteParaMatricular.subscribe(res => {
      this.ListadatosEstudianteAny = res;
    console.log("DATOS PARA EST", this.ListadatosEstudianteAny);
    });
  }


/*   filtrarMatricularEstudiante() {
    this._servicioEstudiante.___filtrarMatriculaEstudiante.subscribe(res => {
      this.datoMatEst = res;
     // console.log("DATOS HOMBRES", this.datos);
    });
  }
 */


  eliminarEstudiante(id) {
    this._servicioEstudiante._eliminarEstudiante(id).subscribe((respuesta: any) => {
      this.toastr.error(JSON.stringify('El estudiante fue eliminado con éxito'),
        JSON.stringify('Registro Eliminado'), {
        timeOut: 2000,
        progressBar: true
      });
     // this.filtrarMatricularEstudiante();
    });
  }


 /*  buscar(v) {

 this._matriculaServicio._filtrarParaMatricular(v);

  } */
  buscar(v) {

 this._matriculaServicio._filtrarEstudianteParaMatricular(v);

  }

}
