import { IEstudiante } from './../../../../modelos/iestudiante';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstadocivilService } from '@servicios/estadocivil.service';
import { EstudianteService } from '@servicios/estudiante.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss'],
  providers: [MessageService]
})
export class EditarEstudianteComponent implements OnInit {

  public form: FormGroup;
  listaSexo: any;
  listaEstadocivil: any;
  listaIglesia: any;
  recarga = false;
  imgSrc: string = '/assets/images/estudiante/image_placeholder.jpg';
  files: any;
  datoUltimoDato: Estudiante2[];
  idEstudiante: any;
  public datos: IEstudiante = {} as IEstudiante;
  public mensajeError: string | null = null;
  datosany: any;
  datosarreglo: Estudiante2[];
  $userData: Observable<Estudiante2> ;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioEstudiate: EstudianteService,
    private ruteador: Router,
    private _servicioSexo: SexoService,
    private _servicioEstadocivil: EstadocivilService,
    private _servicioIglesia: IglesiaService,
    private activarRuter: ActivatedRoute,
    private messageService: MessageService,

  ) {
    this.form = this.fb.group({
      sex_descripcion: ['', Validators.required],
      est_cedula: ['', Validators.required],
      est_apellido: ['', Validators.required],
      est_nombre: ['', Validators.required],
      sex_id: ['', Validators.required],
      esc_id: ['', Validators.required],
      est_fechanacimiento: ['', Validators.required],
      est_fechabautismo: ['', Validators.required],
      est_celular: ['', Validators.required],
      est_direccion: ['', Validators.required],
      igl_id: ['', Validators.required],
      est_correo: ['', Validators.required],
      // est_imagen: [null, Validators.required],

    });
  }

  ngOnInit(): void {
    this._servicioSexo._listarSexo().subscribe((dato: any) => {
      this.listaSexo = dato;
    });

    this._servicioEstadocivil._listarEstadoCivil().subscribe((dato: any) => {
      this.listaEstadocivil = dato;
    });

    this._servicioIglesia._listarIglesia().subscribe((dato: any) => {
      this.listaIglesia = dato;
    });


    const __id = this.activarRuter.snapshot.paramMap.get('id');
    this._servicioEstudiate._buscarEstudiantePorId(__id).subscribe(res => {
      this.datosany = res;
      console.log("DATOS ANY:", this.datosany);
      this.form = this.fb.group({
        est_cedula: [this.datosany.est_cedula],
        est_apellido: [this.datosany.est_apellido],
        est_nombre: [this.datosany.est_nombre],
        sex_id: [this.datosany.sex_id],
        esc_id: [this.datosany.esc_id],
        est_fechabautismo: [this.datosany.est_fechabautismo],
        est_fechanacimiento: [this.datosany.est_fechanacimiento],
        est_celular: [this.datosany.est_celular],
        est_direccion: [this.datosany.est_direccion],
        igl_id: [this.datosany.igl_id],
        // est_imagen: [this.datosany.est_imagen],
      });
    });

  }

  editar() {
    const __id = this.activarRuter.snapshot.paramMap.get('id');
    this._servicioEstudiate._editarEstudiante(__id, this.form.value).subscribe(res => {
    this.toastr.warning(JSON.stringify('Actualizado Correctamente'),
        JSON.stringify('Actualizado'), {
        timeOut: 3000,
        progressBar: true
      });

      //this.messageService.add({ severity: 'info', summary: 'Actualizado', detail: 'Correctamente' });

      this.ruteador.navigateByUrl('/admin/estu/listar');

    //  this.listarEstudianteH();
      //window.location.href="/est/dashboard";
    })
  }


  /*  */
}
