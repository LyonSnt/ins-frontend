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
  listarch: IEstudiante[] = [];

  data2: any;
  listar: any;
data34: any;
  listaSexo: any;
  listaEstadocivil: any;
  listaIglesia: any;

  recarga = false;

  estudiante = new Estudiante2();

  public archivos: any = [];

  imgSrc: string = '/assets/images/estudiante/image_placeholder.jpg';
  selectedImage: any = null;

  files: any;
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
      est_imagen: [null, Validators.required],

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

  }

  subirimagen(event) {
    this.files = event.target.files[0];
  }

  crearEstudiante2() {

    if (this.form.valid) {
      return;  //AQUI FUNCIONO SIN ESTO NO SE PORQUE
    }
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
    this._servicioEstudiate.uploadData(formData).subscribe(r => {

      this.toastr.success(JSON.stringify('El Estudiante fue registrado con exito'),
      JSON.stringify('Registrado'), {
      timeOut: 2000,
      progressBar: true
    });
    this.ruteador.navigateByUrl('/admin/estudiante/listar');

    });

  }

  capturarImagen2(event): any {

    const archivoCapturado = event.target.files[0];
    this.archivos.push(archivoCapturado);
    console.log(this.archivos);

  }

  capturarImagen(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      console.log(' NO SE QUE ES', this.selectedImage);

    } else {
      this.imgSrc = '/assets/images/estudiante/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }


  selectChange(event: any) {
    if (event.target.files.length > 0) {
      this.files = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.onloadend = (event: any ) => {
        this.imgSrc = event.target.result;
      }
    } else {
      this.imgSrc;
    }
  }

}

