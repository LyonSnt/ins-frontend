import { Matricula } from '@modelos/matricula.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstudianteService } from '@servicios/estudiante.service';
import { LoginService } from '@servicios/login.service';
import { MatriculaService } from '@servicios/matricula.service';
import { ToastrService } from 'ngx-toastr';
import { NivelService } from '@servicios/nivel.service';
import { AsignaturaService } from '@servicios/asignatura.service';
import { TrimestreService } from '@servicios/trimestre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesorService } from '@servicios/profesor.service';
import { MesService } from '@servicios/mes.service';
import { AnioacademicoService } from '@servicios/anioacademico.service';
import { AulaService } from '@servicios/aula.service';
import { ContadorService } from '@servicios/contador.service';
import { Contador } from '@modelos/contador';

@Component({
  selector: 'app-matricular-matricula',
  templateUrl: './matricular-matricula.component.html',
  styleUrls: ['./matricular-matricula.component.scss']
})
export class MatricularMatriculaComponent implements OnInit {
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

  cont: any;
  cont2: any;
  cont3: any;
  datoCrear: any;

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
    private ruteador: Router,
    private _contadorServicio: ContadorService

  ) {

    this.form = this.fb.group({
      idv: ['', [Validators.required]],
      codigoestudiante: ['', [Validators.required]],
      est_cedulav: ['', [Validators.required]],
      est_apellidov: ['', [Validators.required]],
      est_nombrev: ['', [Validators.required]],
      niv_idv: ['', [Validators.required]],
      asg_idv: ['', [Validators.required]],
      mes_idv: ['', [Validators.required]],
      ani_idv: ['', [Validators.required]],
      mtr_estadov: ['', [Validators.required]],
      mtr_id: ['', [Validators.required]],
      /*   est_estadov: ['', [Validators.required]],
   */

    });


  }

  ngOnInit(): void {

    this._contadorServicio._listarContadorMatricula().subscribe((dato: any) => {
      this.contadorDatoMatricula = dato;

      for (this.cont of this.contadorDatoMatricula) {

        this.cont2 = this.cont.con_contador;

        this.cont3 = this.cont2 + 1;

        console.log("CONTADOR MATRI:", this.cont3);
      }


    })
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

    const __id = this.activarRuter.snapshot.paramMap.get('id');
    this._estudianteServicio._buscarEstudiantePorId(__id).subscribe(res => {
      this.datosany = res;
      console.log("DATOS ANY:", this.datosany);
      this.form = this.fb.group({
        idv: [this.datosany.id],
        codigoestudiante: ['Estu-' + this.datosany.id],
        est_cedulav: [this.datosany.est_cedula],
        est_apellidov: [this.datosany.est_apellido],
        est_nombrev: [this.datosany.est_nombre],
        niv_idv: [''],
        asg_idv: [''],
        mes_idv: [''],
        ani_idv: [''],
        mtr_estadov: [''],
        mtr_id: [''],
        /*   est_estadov: ['1'], */
      });
    });

    //this.obtenerUltimoIdMatricula();


  }

  obtenerUltimoIdMatricula() {

    this._matriculaServicio.modeloMatriculaId.subscribe(res => {
      this.datosMatriId = res;
      console.log("DATOS MUJERES", this.datosMatriId);


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


  crear() {
    this._matriculaServicio._createMatricula(this.form.value).subscribe(r => {
      this.datoCrear = r;
      if (this.datoCrear.status == 1) {

        this.toastr.info(JSON.stringify(this.datoCrear.msg2), JSON.stringify(this.datoCrear.msg1), {
          timeOut: 3000,
          progressBar: true
        });
        window.location.href = "/admin/matricula/imp2022::";


      } else if (this.datoCrear.status == 0) {
        this.toastr.error(JSON.stringify(this.datoCrear.msg), JSON.stringify('ERROR'), {
          timeOut: 3000,
          progressBar: true
        });
      }

      /*  this.toastr.success(JSON.stringify('La matricula fue registrada con exito'),
         JSON.stringify('Registrado'), {
         timeOut: 2000,
         progressBar: true
       }); */
      // this.ruteador.navigateByUrl('/admin/matricula/imp2022::')
    
      //  window.location.reload();

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
