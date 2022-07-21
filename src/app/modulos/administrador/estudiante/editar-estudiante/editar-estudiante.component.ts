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

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.scss']
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


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioEstudiate: EstudianteService,
    private ruteador: Router,
    private _servicioSexo: SexoService,
    private _servicioEstadocivil: EstadocivilService,
    private _servicioIglesia: IglesiaService,
    private activarRuter: ActivatedRoute,

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

    this.activarRuter.paramMap.subscribe((param: ParamMap) => {
      this.idEstudiante = param.get('id');
    //  console.log("ID ESTUDIANTE",this.idEstudiante);
      this.obtenerDato();

    });


  }


  obtenerDato() {

    if (this.idEstudiante) {
      this._servicioEstudiate._buscarEstudiantePorId(this.idEstudiante).subscribe((dato: IEstudiante) => {
        this.datos = dato;
         console.log("DATO ESTUDIANTE: ", this.datos);
      },
        (error) => {
          this.mensajeError = error;
        });
    }
  }

  editar() {
    console.log(this.form.value);
    this._servicioEstudiate._editarEstudiante(this.idEstudiante, this.form.value).subscribe(res => {
     // console.log('Actualizado Correctamente');
      this.toastr.warning(JSON.stringify('Actualizado Correctamente'),
        JSON.stringify('Actualizado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.ruteador.navigateByUrl('/admin/estudiante/listar');
    })
  }

}
