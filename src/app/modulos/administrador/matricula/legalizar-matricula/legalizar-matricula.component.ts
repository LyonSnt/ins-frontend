import { Matricula } from '@modelos/matricula.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadocivilService } from '@servicios/estadocivil.service';
import { EstudianteService } from '@servicios/estudiante.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { MatriculaService } from '@servicios/matricula.service';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { NivelService } from '@servicios/nivel.service';
import { AsignaturaService } from '@servicios/asignatura.service';
import { TrimestreService } from '@servicios/trimestre.service';
import { LoginService } from '@servicios/login.service';
import { ProfesorService } from '@servicios/profesor.service';
import { MesService } from '@servicios/mes.service';
import { AnioacademicoService } from '@servicios/anioacademico.service';
import { AulaService } from '@servicios/aula.service';

@Component({
  selector: 'app-legalizar-matricula',
  templateUrl: './legalizar-matricula.component.html',
  styleUrls: ['./legalizar-matricula.component.scss'],
  providers: [MessageService]
})
export class LegalizarMatriculaComponent implements OnInit {
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

  constructor(
    private _nivelServicio: NivelService,
    private _asignaturaServicio: AsignaturaService,
    private _trimestreServicio: TrimestreService,
    private fb: FormBuilder,
    private _servicioLogin: LoginService,
    private _estudianteServicio: EstudianteService,
    private activarRuter: ActivatedRoute,
    private _profesorServicio: ProfesorService,
    private _mesServicio: MesService,
    private _aniocademicoServicio: AnioacademicoService,
    private _aulaServicio: AulaService,
    private _matriculaServicio: MatriculaService,
    private toastr: ToastrService,
    private ruteador: Router
  ) {

    this.form = this.fb.group({
      idv: ['', [Validators.required]],
      est_idv: ['', [Validators.required]],
      est_cedulav: ['', [Validators.required]],
      est_apellidov: ['', [Validators.required]],
      est_nombrev: ['', [Validators.required]],
      niv_idv: ['', [Validators.required]],
      asg_idv: ['', [Validators.required]],
      mes_idv: ['', [Validators.required]],
      ani_idv: ['', [Validators.required]],
      mtr_estadov: ['', [Validators.required]],


    });


  }

  ngOnInit(): void {
    this._nivelServicio._listarNivel().subscribe((dato: any) => {
      this.listaNivel = dato;
     // console.log("NIVEL:", this.listaNivel);

    });

    this._trimestreServicio._listarTrimestreH().subscribe((dato: any) => {
      this.listaTrimestre = dato;
    });
    this._mesServicio._listarMes().subscribe((dato: any) => {
      this.listaMes = dato;
    });

    this._aniocademicoServicio._listarAnioacademico().subscribe((dato: any) => {
      this.listaAnioacademico = dato;
    });



    const __id = this.activarRuter.snapshot.paramMap.get('id'); //ESTE ID NO CAMBIA A PESAR DE USAR EL AS EN LA CONSULTA DE LA BASE, ES DE LA PARDE DONDE SE PONE WHERE E.ID = $ID
    this._matriculaServicio._buscarMatriculaEstudiantePorId(__id).subscribe(res => {
      this.datosany = res;

      for (this.datoConverArreglo of this.datosany) {
        console.log("ARREGLO:", this.datoConverArreglo); //SE PROCEDE A CONVERTIR CON FOR PARA QUE SE PUEDA VISUALIZAR LOS DATOS EN LA VISTA DE LEGALIZAR
      }
      //console.log("DATOS ANY:", this.datosany);
      this.form = this.fb.group({
        idv: [this.datoConverArreglo.id],
        est_idv: [this.datoConverArreglo.idest],
        est_cedulav: [this.datoConverArreglo.est_cedula],
        est_apellidov: [this.datoConverArreglo.ape],
        est_nombrev: [this.datoConverArreglo.nombre],
        niv_idv: [this.datoConverArreglo.nivid],
        asg_idv: [this.datoConverArreglo.asg_id],
        mes_idv: [this.datoConverArreglo.mes_id],
        ani_idv: [this.datoConverArreglo.ani_id],
        mtr_estadov: ['1'],

      });
    });


  }


  cargarNivel(event) {
    var obj = {
      niv_id: event.target.value //este niv_id es de la base de datos
    }
    this._asignaturaServicio._listarNivelAsignatura(obj).subscribe((dato) => {
      this.listaAsignatura = dato;
      //  console.log("CARGAR MATERIA: ", this.listaAsignatura);
    });

  }


  editar() {
    const __id = this.activarRuter.snapshot.paramMap.get('id');
 this._matriculaServicio._legalizarMatricula2(__id, this.form.value).subscribe(res => {

      this.datoSave = res;

      console.log("DATO GUADAR ID:", __id);
      console.log("DATO GUADADO:", this.datoSave);

      /*    this.toastr.warning(JSON.stringify('Actualizado Correctamente'),
           JSON.stringify('Actualizado'), {
           timeOut: 3000,
           progressBar: true
         }); */

      //this.messageService.add({ severity: 'info', summary: 'Actualizado', detail: 'Correctamente' });

     // this.ruteador.navigateByUrl('/admin/matricula/listar');

      //  this.listarEstudianteH();
      //window.location.href="/est/dashboard";
    })
  }

}
