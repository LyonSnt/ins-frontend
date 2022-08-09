import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contador } from '@modelos/contador';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { IEstudiante } from '@modelos/iestudiante';
import { Matricula } from '@modelos/matricula.model';
import { ContadorService } from '@servicios/contador.service';
import { EstadocivilService } from '@servicios/estadocivil.service';
import { EstudianteService } from '@servicios/estudiante.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { MatriculaService } from '@servicios/matricula.service';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anular-matricula',
  templateUrl: './anular-matricula.component.html',
  styleUrls: ['./anular-matricula.component.scss'],
  providers: [MessageService]
})
export class AnularMatriculaComponent implements OnInit {
  public form: FormGroup;
  listaSexo: any;
  listaEstadocivil: any;
  listaIglesia: any;
  recarga = false;
  imgSrc: string = '/assets/images/estudiante/image_placeholder.jpg';
  files: any;
  datosany: any;

  submitted: boolean;
  datoConverArreglo: any;

  listaNivel: any = [];
  listaTrimestre: any = [];
  //public datos: IEstudiante = {} as IEstudiante;

  listaMes: any;
  listaAnioacademico: any;
  listAula: any;
  listaAsignatura: any;
  nivelAsignatura: any;

  trimestre: any;
  idEstudiante: any;

  public mensajeError: string | null = null;

  public datoMatriculaId: any;

  datosMatriId: Matricula[];

  seleccionadoAnio = 6;
  seleccionadoAula = 1;
  seleccionadoMatricula = 1;

  datoSave: any;
  contadorDatoMatricula: Contador[];

  datosArregloAny: any;
  cont2: any;
  cont3: any;

  constructor(


    private fb: FormBuilder,

    private _estudianteServicio: EstudianteService,
    private activarRuter: ActivatedRoute,
    private _matriculaServicio: MatriculaService,
    private toastr: ToastrService,
    private ruteador: Router,
    private _contadorServicio: ContadorService

  ) {

    this.form = this.fb.group({
      idv: ['', [Validators.required]],
      idestv: ['', [Validators.required]],
      codigomatriculav: ['', [Validators.required]],
      codigoestudiantev: ['', [Validators.required]],
      est_cedulav: ['', [Validators.required]],
      est_apellidov: ['', [Validators.required]],
      est_nombrev: ['', [Validators.required]],
      mtr_estadov: ['1', [Validators.required]],


    });


  }

  ngOnInit(): void {


    const __id = this.activarRuter.snapshot.paramMap.get('id');
    this._matriculaServicio._buscarMatriculaEstudiantePorId(__id).subscribe(res => {
      this.datosany = res;

      for (this.datosArregloAny of this.datosany) {
        console.log("CONTADOR MATRI:", this.datosArregloAny);
      }
      // console.log("DATOS ANY:", this.datosany);
      this.form = this.fb.group({
        idv: [this.datosArregloAny.id],
        idestv: [this.datosArregloAny.idest],
        codigomatriculav: ['Matr-' + this.datosArregloAny.id],
        codigoestudiantev: ['Estu-' + this.datosArregloAny.idest],
        est_cedulav: [this.datosArregloAny.est_cedula],
        est_apellidov: [this.datosArregloAny.ape],
        est_nombrev: [this.datosArregloAny.nombre],
        mtr_estadov: ['1'],

      });
    });

  }


  editar() {
    const __id = this.activarRuter.snapshot.paramMap.get('id');
    this._matriculaServicio._anularMatricula(__id, this.form.value).subscribe(res => {
      this.toastr.warning(JSON.stringify('Actualizado Correctamente'),
        JSON.stringify('Actualizado'), {
        timeOut: 3000,
        progressBar: true
      });

      //this.messageService.add({ severity: 'info', summary: 'Actualizado', detail: 'Correctamente' });

      this.ruteador.navigateByUrl('/admin/matricula/listar');

      //  this.listarEstudianteH();
      //window.location.href="/est/dashboard";
    })
  }

}
