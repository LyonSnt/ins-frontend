import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IInstitucion } from '@modelos/iinstitucion';
import { InstitucionService } from '@servicios/institucion.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { Paginator } from 'primeng/paginator';


@Component({
  selector: 'app-agregarlistar-institucion',
  templateUrl: './agregarlistar-institucion.component.html',
  styleUrls: ['./agregarlistar-institucion.component.scss'],
  providers: [MessageService]
})
export class AgregarlistarInstitucionComponent implements OnInit {

  form: FormGroup;
  listarch: IInstitucion[] = [];

  datoCrear: any;
  datoEditar: any;
  listar: any;
  id: number | undefined;
  __instId: number | undefined;
  accion = 'Agregar';
  totalRecords: number;
  submitted: boolean;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private _institucionServicio: InstitucionService,
    private ruteador: Router,
    private messageService: MessageService,

  ) {
    this.form = this.fb.group({
      ins_nombrev: ['', [Validators.required, Validators.minLength(4)]],
      ins_direccionv: ['', [Validators.required, Validators.minLength(4)]],
      ins_telefonov: ['', [Validators.required]],
      ins_correov: ['', [Validators.required, Validators.email, Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ]
      ],

    });

  }

  ngOnInit(): void {
    this.listarInstitucion();
  }

  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  enviarInstitucionAInput(insti: any) {
    this.accion = 'Editar';
    this.__instId = insti.id;
    this.form.patchValue({
      ins_nombrev: insti.ins_nombre,
      ins_direccionv: insti.ins_direccion,
      ins_telefonov: insti.ins_telefono,
      ins_correov: insti.ins_correo
    });

  }

  crearInstitucion() {
    this.submitted = true;
    const institucion: any = {
      ins_nombre: this.form.get('ins_nombrev')?.value,
      ins_direccion: this.form.get('ins_direccionv')?.value,
      ins_telefono: this.form.get('ins_telefonov')?.value,
      ins_correo: this.form.get('ins_correov')?.value,

    }
    if (this.__instId == undefined) {
      this._institucionServicio._crearInstitucion(this.form.value).subscribe(r => {
        this.datoCrear = r;
        console.log("DATOS", this.datoCrear);
        //this.recarga = false;
        this.listarInstitucion();
        this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Correctamente' });
        this.form.reset();
      });
    } else {
      institucion.id = this.__instId;
      this._institucionServicio._editarInstitucion(this.__instId, institucion).subscribe(r => {
        this.datoEditar = r;
        /*  console.log("DATOS", this.data2); */
        /*  this.recarga = false; */
        /*   */

        this.form.reset();
        this.accion = 'Agregar';
        this.__instId = undefined;
        this.messageService.add({ severity: 'info', summary: 'Actualizado', detail: 'Correctamente' });
        this.listarInstitucion();
      });
    }

  }

  listarInstitucion() {
    this._institucionServicio._listarInstitucion().subscribe((dato: any) => {
      this.listar = dato;
      this.totalRecords = this.listar.length; //ESTE SIRVE PARA PAGINAR
        console.log("listar datos: ", this.listar);

    });
  }



  eliminarInstitucion(id: number) {
    if (confirm('Desea eliminar')) {
      this._institucionServicio._eliminarInstitucion(id).subscribe((respuesta: any) => {
        this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Correctamente' });
        this.listarInstitucion();
      });
    }
  }
}
