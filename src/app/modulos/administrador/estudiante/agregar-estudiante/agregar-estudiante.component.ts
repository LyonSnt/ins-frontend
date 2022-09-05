import { map, Subscription } from 'rxjs';
import { Estudiante2 } from './../../../../modelos/estudiante2.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEstudiante } from '@modelos/iestudiante';
import { EstadocivilService } from '@servicios/estadocivil.service';
import { EstudianteService } from '@servicios/estudiante.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { ContadorService } from '@servicios/contador.service';
import { Contador } from '@modelos/contador';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss'],
  providers: [MessageService]
})
export class AgregarEstudianteComponent implements OnInit {

  form: FormGroup;
  listaSexo: any;
  listaEstadocivil: any;
  listaIglesia: any;
  recarga = false;
  imgSrc: string = '/assets/images/estudiante/image_placeholder.jpg';
  files: any;
  datoUltimoDato: Estudiante2[];

  contadorDato: Contador[];

  datos: Estudiante2[] = [];
  submitted: boolean;

  aux: any;

  public diaStatico: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  public diasesta: any;

  public mesStatico: any = [
    { mesid: '1', mes: 'Ene', checked: false },
    { mesid: '2', mes: 'Feb', checked: false },
    { mesid: '3', mes: 'Mar', checked: false },
    { mesid: '4', mes: 'Abr', checked: false },
    { mesid: '5', mes: 'May', checked: false },
    { mesid: '6', mes: 'Jun', checked: false },
    { mesid: '7', mes: 'Jul', checked: false },
    { mesid: '8', mes: 'Ago', checked: false },
    { mesid: '9', mes: 'Sep', checked: false },
    { mesid: '10', mes: 'Oct', checked: false },
    { mesid: '11', mes: 'Nov', checked: false },
    { mesid: '12', mes: 'Dic', checked: false },
  ];

  public anioStatico: any = [
    { anioid: '1', anio: '2015', checked: false },
    { anioid: '2', anio: '2016', checked: false },
    { anioid: '3', anio: '2017', checked: false },
    { anioid: '4', anio: '2021', checked: false },
    { anioid: '5', anio: '2022', checked: false },
  ];

  dias: any;
  num: any;
  numbers: any;
  dateSubscription: Subscription;
  datoCrear: any;

  constructor(
    private fb: FormBuilder,
    private _servicioEstudiate: EstudianteService,
    private ruteador: Router,
    private _servicioSexo: SexoService,
    private _servicioEstadocivil: EstadocivilService,
    private _servicioIglesia: IglesiaService,
    private messageService: MessageService,
    private toastr: ToastrService,
    private _contadorServicio: ContadorService

  ) {
    // this.numbers = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]
    // this.numbers = Array(5).fill(4);
    this.form = this.fb.group({
      usuario_id: ['', [Validators.required]],
      est_correo: ['@gmail.com', [Validators.required, Validators.email, Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ]
      ],
      est_contra: ['12345678', [Validators.required, Validators.minLength(4)]],
      est_cedula: ['', Validators.required],
      est_apellido: ['', Validators.required],
      est_nombre: ['', Validators.required],
      sex_id: ['1', Validators.required],
      esc_id: ['1', Validators.required],
      est_fechanacimiento: ['', Validators.required],
      est_fechabautismo: ['', Validators.required],
      est_celular: ['0000000', Validators.required],
      est_direccion: ['Editar', Validators.required],
      igl_id: ['33', Validators.required],
      est_imagen: [null, Validators.required],
      est_rol: ['Estudiante', Validators.required],

      /*      diav: ['', [Validators.required,]],
           mesv: ['', [Validators.required, ]],
           anio2v: ['', [Validators.required,]], */

    });
  }

  ngOnInit(): void {
    /*
        this.dateSubscription = this.form.valueChanges
        .pipe(map(this.formatDate))
        .subscribe(d => console.log('MM/DD/YY', d));
     */

    this._contadorServicio._listarContadorEstudiante().subscribe((dato: any) => {
      this.contadorDato = dato;

    });

    this._servicioSexo._listarSexo().subscribe((dato: any) => {
      this.listaSexo = dato;
    });

    this._servicioEstadocivil._listarEstadoCivil().subscribe((dato: any) => {
      this.listaEstadocivil = dato;
    });

    this._servicioIglesia._listarIglesia().subscribe((dato: any) => {
      this.listaIglesia = dato;
    });

    // this.listarEstudianteH();
  }

  /*   formatDate({ anio2v, diav, mesv }: any): string {
      return new Date(diav + '/' + +mesv + '/' + +anio2v).toLocaleString();
    } */

  subirimagen(event) {

    this.files = event.target.files[0];
  }
  ultimoDato() {
    this._servicioEstudiate._ultimodato().subscribe(res => {
      this.datoUltimoDato = res;
      console.log("DATOS ULTIMOS", this.datoUltimoDato);
    });
  }
  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  crearEstudiante2() {
    this.submitted = true;

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

      this.datoCrear = r;

      if (this.datoCrear.status == 1) {

        this.toastr.info(JSON.stringify(this.datoCrear.msg2), JSON.stringify(this.datoCrear.msg1), {
          timeOut: 3000,
          progressBar: true
        });

        // this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Correctamente' });
        this.ruteador.navigateByUrl('/admin/matricula/listamatricular');
      } else if (this.datoCrear.status == 0) {
        this.toastr.error(JSON.stringify(this.datoCrear.msg), JSON.stringify('ERROR'), {
          timeOut: 3000,
          progressBar: true
        });
      }


    });

  }

  hola() {
    for (this.dias = 1; this.dias <= 31; this.dias += 1) {
      console.log("DIAS:", this.dias);
    }

  }


  numSequence(n: number): Array<number> {
    return Array(n);
  }

  crearEstudianteDiaca() {
    this.submitted = true;
  }

}

