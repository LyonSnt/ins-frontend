import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contador } from '@modelos/contador';
import { Profesor } from '@modelos/profesor';
import { ContadorService } from '@servicios/contador.service';
import { EstadocivilService } from '@servicios/estadocivil.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { ProfesorService } from '@servicios/profesor.service';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.scss'],
  providers: [MessageService]
})
export class AgregarProfesorComponent implements OnInit {

  form: FormGroup;
  listaSexo: any;
  listaEstadocivil: any;
  listaIglesia: any;
  recarga = false;
  imgSrc: string = '/assets/images/estudiante/image_placeholder.jpg';
  files: any;
  datoUltimoDato: Profesor[];

  contadorDato: Contador[];

  datos: Profesor[] = [];
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
  datoCrear: any;
  constructor(
    private fb: FormBuilder,
    private _profesorServicio: ProfesorService,
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
      pro_correo: ['', [Validators.required, Validators.email, Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ]
      ],
      pro_contra: ['', [Validators.required, Validators.minLength(4)]],
      pro_cedula: ['878787878', Validators.required],
      pro_apellido: ['Apellido Profe', Validators.required],
      pro_nombre: ['Nombre Profe', Validators.required],
      sex_id: ['', Validators.required],
      esc_id: ['', Validators.required],
      pro_fechanacimiento: ['', Validators.required],
      pro_fechabautismo: ['', Validators.required],
      pro_celular: ['', Validators.required],
      pro_direccion: ['', Validators.required],
      igl_id: ['1', Validators.required],
      pro_imagen: [null, Validators.required],
      pro_rol: ['Profesor', Validators.required],

      /*      diav: ['', [Validators.required,]],
           mesv: ['', [Validators.required, ]],
           anio2v: ['', [Validators.required,]], */

    });
  }

  ngOnInit(): void {

    this._contadorServicio._listarContadorProfesor().subscribe((dato: any) => {
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


  subirimagen(event) {

    this.files = event.target.files[0];
  }

  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  crearProfesor() {
    this.submitted = true;

    const formData = new FormData();
    formData.append("pro_imagen", this.files, this.files.name);
    formData.append("pro_cedula", this.form.get('pro_cedula')?.value);
    formData.append("pro_apellido", this.form.get('pro_apellido')?.value);
    formData.append("pro_nombre", this.form.get('pro_nombre')?.value);
    formData.append("sex_id", this.form.get('sex_id')?.value);
    formData.append("esc_id", this.form.get('esc_id')?.value);
    formData.append("pro_fechanacimiento", this.form.get('pro_fechanacimiento')?.value);
    formData.append("pro_fechabautismo", this.form.get('pro_fechabautismo')?.value);
    formData.append("pro_celular", this.form.get('pro_celular')?.value);
    formData.append("pro_direccion", this.form.get('pro_direccion')?.value);
    formData.append("igl_id", this.form.get('igl_id')?.value);

    formData.append("pro_correo", this.form.get('pro_correo')?.value);
    formData.append("pro_rol", this.form.get('pro_rol')?.value);
    formData.append("usuario_id", this.form.get('usuario_id')?.value);
    formData.append("pro_contra", this.form.get('pro_contra')?.value);

    this._profesorServicio._createProfesor(formData).subscribe(r => {
    
      this.datoCrear = r;

      if (this.datoCrear.status == 1) {

        this.toastr.info(JSON.stringify(this.datoCrear.msg2), JSON.stringify(this.datoCrear.msg1), {
          timeOut: 3000,
          progressBar: true
        });

        // this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Correctamente' });
        this.ruteador.navigateByUrl('/admin/profesor/listar');
      } else if (this.datoCrear.status == 0) {
        this.toastr.error(JSON.stringify(this.datoCrear.msg), JSON.stringify('ERROR'), {
          timeOut: 3000,
          progressBar: true
        });
      }
      // this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Correctamente' });
      
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

