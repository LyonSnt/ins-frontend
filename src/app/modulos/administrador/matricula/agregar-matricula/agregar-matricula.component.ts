import { AnioacademicoService } from './../../../../servicios/anioacademico.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IEstudiante } from '@modelos/iestudiante';
import { INivel } from '@modelos/inivel';
import { IProfesor } from '@modelos/iprofesor';
import { AsignaturaService } from '@servicios/asignatura.service';
import { EstudianteService } from '@servicios/estudiante.service';
import { LoginService } from '@servicios/login.service';
import { MesService } from '@servicios/mes.service';
import { NivelService } from '@servicios/nivel.service';
import { ProfesorService } from '@servicios/profesor.service';
import { TrimestreService } from '@servicios/trimestre.service';
import { AulaService } from '@servicios/aula.service';
import { Matricula } from '@modelos/matricula.model';
import { MatriculaService } from '@servicios/matricula.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-matricula',
  templateUrl: './agregar-matricula.component.html',
  styleUrls: ['./agregar-matricula.component.scss'],

})
export class AgregarMatriculaComponent implements OnInit {
  listaNivel: any = [];
  listaTrimestre: any = [];
  public datos: IEstudiante = {} as IEstudiante;

  public form: FormGroup;
  listaMes: any;
  listaAnioacademico: any;
  listAula: any;
  materia: any;

  trimestre: any;
  idEstudiante: any;

  public mensajeError: string | null = null;

  public datoMatriculaId: any;

  datosMatriId: Matricula[];

  seleccionadoAnio = 6;
  seleccionadoAula = 1;
  seleccionadoMatricula = 1;

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

  }
  ngOnInit(): void {
    this._nivelServicio._listarNivel().subscribe((dato: any) => {
      this.listaNivel = dato;
    });

    this._mesServicio._listarMes().subscribe((dato: any) => {
      this.listaMes = dato;
    });

    this._aniocademicoServicio._listarAnioacademico().subscribe((dato: any) => {
      this.listaAnioacademico = dato;
    });

    this._aulaServicio._listarAula().subscribe((dato: any) => {
      this.listAula = dato;
    });

    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this._trimestreServicio._listarTrimestreH().subscribe((dato: any) => {
        this.listaTrimestre = dato;
      });

    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this._trimestreServicio._listarTrimestreM().subscribe((dato: any) => {
        this.listaTrimestre = dato;
      });

    }

    this.activarRuter.paramMap.subscribe((param: ParamMap) => {
      this.idEstudiante = param.get('id');
      // console.log("ID EN PARAM", this.idEstudiante);
    });//ESTA PARTE TRABAJA CONJUNTAMENTE CON EL OBTENER DATOS

    this.obtenerDato();

    this.form = this.fb.group({
      est_id: [this.idEstudiante, [Validators.required]],
      mtr_id: ['', [Validators.required]],
      asg_id: ['', [Validators.required]],
      niv_id: ['', [Validators.required]],
      sex_id: ['', [Validators.required]],
      tri_id: ['', [Validators.required]],
      est_cedula: ['', [Validators.required]],
      est_apellido: ['', [Validators.required]],
      est_nombre: ['', [Validators.required]],
      mes_id: ['', [Validators.required]],
      ani_id: ['', [Validators.required]],
      aul_id: ['', [Validators.required]],

    });
    this.obtenerIdmat();

  }

  obtenerIdmat() {
    /*   const comunidad: any = {
        est_cedula: this.form.get('est_cedula')?.value,
        mtr_id: this.form.get('mtr_id')?.value,
        est_nombre: this.form.get('est_nombre')?.value,

      } */
    this._matriculaServicio.modeloMatriculaId.subscribe(res => {
      this.datosMatriId = res;
      console.log("DATOS MUJERES", this.datosMatriId);


    });

  }

  obtenerDato() {

    if (this.idEstudiante) {
      this._estudianteServicio._buscarEstudiantePorId(this.idEstudiante).subscribe((dato: IEstudiante) => {
        this.datos = dato;
    //  console.log("DATO ESTUDIANTE: ", this.datos.id);
      },
        (error) => {
          this.mensajeError = error;
        });
    }
  }


  cargarMateria(event) {
    var obj = {
      niv_id: event.target.value
    }
    this._asignaturaServicio._cargarMateria(obj).subscribe((dato) => {
      this.materia = dato;
      //  console.log("cargar materia", this.materia);

    });

  }

  cargarNivel(event) {

      var obj = {
        niv_id: event.target.value
      }
      this._asignaturaServicio._cargarNivelH(obj).subscribe((dato) => {
        this.materia = dato;
        //  console.log("CARGAR MATERIA: ", this.materia);

      });

  }

  cargarTrimestre(event) {
      var obj = {
        tri_id: event.target.value
        //  sex_id: event.target.value,
      }
      this._asignaturaServicio._cargarNivelH(obj).subscribe((dato) => {
        this.trimestre = dato;
        //  console.log("cargar materia", this.trimestre);

      });


  }


  crear() {
    this._matriculaServicio._createMatricula(this.form.value).subscribe(r => {
      this.toastr.success(JSON.stringify('La matricula fue registrada con exito'),
        JSON.stringify('Registrado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.ruteador.navigateByUrl('/admin/matricula/imp2022::')
      //  window.location.reload();

    });
  }

}
