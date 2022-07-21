import { Estudiante2 } from './../../../../modelos/estudiante2.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEstudiante } from '@modelos/iestudiante';
import { EstadocivilService } from '@servicios/estadocivil.service';
import { EstudianteService } from '@servicios/estudiante.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})
export class AgregarEstudianteComponent implements OnInit {

  public form: FormGroup;
  listaSexo: any;
  listaEstadocivil: any;
  listaIglesia: any;
  recarga = false;
  imgSrc: string = '/assets/images/estudiante/image_placeholder.jpg';
  files: any;
  datoUltimoDato: Estudiante2[];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioEstudiate: EstudianteService,
    private ruteador: Router,
    private _servicioSexo: SexoService,
    private _servicioEstadocivil: EstadocivilService,
    private _servicioIglesia: IglesiaService

  ) {
    this.form = this.fb.group({
      sex_descripcion: ['', Validators.required],
      est_cedula: ['202020202', Validators.required],
      est_apellido: ['dddd', Validators.required],
      est_nombre: ['sss', Validators.required],
      sex_id: ['1', Validators.required],
      esc_id: ['1', Validators.required],
      est_fechanacimiento: ['', Validators.required],
      est_fechabautismo: ['', Validators.required],
      est_celular: ['', Validators.required],
      est_direccion: ['', Validators.required],
      igl_id: ['1', Validators.required],
      est_imagen: [null, Validators.required],
      est_correo: ['d@gmail.com', Validators.required],
      est_rol: ['Estudiante', Validators.required],
      usuario_id: ['', [Validators.required]],
      est_contra: ['', [Validators.required]],

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


    this.ultimoDato();

  }

  subirimagen(event) {
    this.files = event.target.files[0];
  }

  /*  ultimoDatoOriginal() {
     this._servicioEstudiate.modeloUltimoDato.subscribe(res => {
       this.datoUltimoDato = res;
       console.log("DATOS ULTIMOS", this.datoUltimoDato);
     });
   } */

  ultimoDato() {
      this._servicioEstudiate._ultimodato().subscribe(res => {
        this.datoUltimoDato = res;
        console.log("DATOS ULTIMOS", this.datoUltimoDato);
      });
  }

  crearEstudiante2() {

    /*    if (this.form.valid) {
         return;  //AQUI FUNCIONO SIN ESTO NO SE PORQUE
       } */
    const formData = new FormData();
    formData.append("est_imagen", this.files, this.files.name);
    formData.append("est_cedula", this.form.get('est_cedula')?.value);
    formData.append("est_apellido", this.form.get('est_apellido')?.value);
    formData.append("est_nombre", this.form.get('est_nombre')?.value);
    formData.append("sex_id", this.form.get('sex_id')?.value);
    formData.append("esc_id", this.form.get('esc_id')?.value);
    formData.append("est_fechanacimiento", this.form.get('est_fechanacimiento')?.value);
    formData.append("est_fechabautismo", this.form.get('est_fechabautismo')?.value);
    formData.append("est_celular", this.form.get('est_celular')?.value);
    formData.append("est_direccion", this.form.get('est_direccion')?.value);
    formData.append("igl_id", this.form.get('igl_id')?.value);

    formData.append("est_correo", this.form.get('est_correo')?.value);
    formData.append("est_rol", this.form.get('est_rol')?.value);
    formData.append("usuario_id", this.form.get('usuario_id')?.value);
    formData.append("est_contra", this.form.get('est_contra')?.value);

    this._servicioEstudiate._crearEstudiante(formData).subscribe(r => {

      this.toastr.success(JSON.stringify('El Estudiante fue registrado con exito'),
        JSON.stringify('Registrado'), {
        timeOut: 2000,
        progressBar: true
      });
      // this.ruteador.navigateByUrl('/admin/estudiante/listar');
    });

  }

}

