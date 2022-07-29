import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IInstitucion } from '@modelos/iinstitucion';
import { AnioacademicoService } from '@servicios/anioacademico.service';
import { IglesiaService } from '@servicios/iglesia.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregarlistar-iglesia',
  templateUrl: './agregarlistar-iglesia.component.html',
  styleUrls: ['./agregarlistar-iglesia.component.scss'],
  providers: [MessageService]
})
export class AgregarlistarIglesiaComponent implements OnInit {

  form: FormGroup;
  listarch: IInstitucion[] = [];

  datoCrear: any;
  datoEditar: any;
  listar: any;
  id: number | undefined;
  __iglesiaId: number | undefined;
  accion = 'Agregar';
  totalRecords: number;
  submitted: boolean;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private _iglesiaServicio: IglesiaService,
    private ruteador: Router,
    private messageService: MessageService

  ) {
    this.form = this.fb.group({
      igl_nombrev: ['', [Validators.required, Validators.minLength(4)]],
      igl_direccionv: ['', [Validators.required, Validators.minLength(4)]],
      igl_telefonov: ['', [Validators.required]],
      igl_correov: ['', [Validators.required, Validators.email, Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ]
      ],

    });

  }

  ngOnInit(): void {

    this.listarIglesia();
  }


  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }
  enviarIglesiaAInput(iglesiaDato: any) {
    this.accion = 'Editar';
    this.__iglesiaId = iglesiaDato.id;
    this.form.patchValue({
      igl_nombrev: iglesiaDato.igl_nombre,
      igl_direccionv: iglesiaDato.igl_direccion,
      igl_telefonov: iglesiaDato.igl_telefono,
      igl_correov: iglesiaDato.igl_correo
    });
  }

  crearIglesia() {
    const iglesia: any = {
      igl_nombre: this.form.get('igl_nombrev')?.value,
      igl_direccion: this.form.get('igl_direccionv')?.value,
      igl_telefono: this.form.get('igl_telefonov')?.value,
      igl_correo: this.form.get('igl_correov')?.value,

    }
    if (this.__iglesiaId == undefined) {
      this._iglesiaServicio._crearIglesia(this.form.value).subscribe(r => {
        this.datoCrear = r;
        console.log("DATOS", this.datoCrear);
        this.recarga = false;
        this.listarIglesia();
        this.messageService.add({severity:'success', summary:'Guardado', detail:'Correctamente'});
        this.form.reset();
      });
    } else {
      iglesia.id = this.__iglesiaId;
      this._iglesiaServicio._editarIglesia(this.__iglesiaId, iglesia).subscribe(r => {
        this.datoEditar = r;
        /*  console.log("DATOS", this.data2); */
        /*  this.recarga = false; */
        /*   */

        this.form.reset();
        this.accion = 'Agregar';
        this.__iglesiaId = undefined;
        this.messageService.add({severity:'info', summary:'Actualizado', detail:'Correctamente'});
        this.listarIglesia();
      });
    }

  }

  listarIglesia() {
    this._iglesiaServicio._listarIglesia().subscribe((dato: any) => {
      this.listar = dato;
      console.log("IGLESIA:", this.listar);

    });
  }


  eliminarIglesia(id: number) {
    if(confirm('Desea eliminar')){
      this._iglesiaServicio._eliminarIglesia(id).subscribe((respuesta: any) => {

        this.messageService.add({severity:'error', summary:'Eliminado', detail:'Correctamente'});
        this.listarIglesia();
      });
    }
  }


}
