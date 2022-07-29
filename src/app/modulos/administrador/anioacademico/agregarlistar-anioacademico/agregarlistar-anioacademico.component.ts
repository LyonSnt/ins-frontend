import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAnioacademico } from '@modelos/ianioacademico';
import { AnioacademicoService } from '@servicios/anioacademico.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregarlistar-anioacademico',
  templateUrl: './agregarlistar-anioacademico.component.html',
  styleUrls: ['./agregarlistar-anioacademico.component.scss'],
  providers: [MessageService]
})
export class AgregarlistarAnioacademicoComponent implements OnInit {
  form: FormGroup;
  listarch: IAnioacademico[] = [];

  datoCrear: any;
  datoEditar: any;
  listar: any;
  id: number | undefined;
  __anioacaId: number | undefined;
  accion = 'Agregar';
  totalRecords: number;
  submitted: boolean;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private _anioacademicoServicio: AnioacademicoService,
    private ruteador: Router,
    private messageService: MessageService

  ) {
    this.form = this.fb.group({
      aniov: ['', [Validators.required, Validators.minLength(4)]],


    });

  }

  ngOnInit(): void {

    this.listarAnioacademico();
  }


  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }
  enviaranioAcademicoAInput(anioDato: any) {
    this.accion = 'Editar';
    this.__anioacaId = anioDato.id;
    this.form.patchValue({
      aniov: anioDato.ani_anio,
    });

  }

  crearCargo() {
    const anioacademico: any = {
      ani_anio: this.form.get('aniov')?.value,


    }
    if (this.__anioacaId == undefined) {
      this._anioacademicoServicio._crearAnioacademico(this.form.value).subscribe(r => {
        this.datoCrear = r;
        console.log("DATOS", this.datoCrear);
        this.recarga = false;
        this.listarAnioacademico();
        this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Correctamente' });
        this.form.reset();
      });
    } else {
      anioacademico.id = this.__anioacaId;
      this._anioacademicoServicio._editarAnioacademico(this.__anioacaId, anioacademico).subscribe(r => {
        this.datoEditar = r;
        /*  console.log("DATOS", this.data2); */
        /*  this.recarga = false; */
        /*   */

        this.form.reset();
        this.accion = 'Agregar';
        this.__anioacaId = undefined;
        this.messageService.add({ severity: 'info', summary: 'Actualizado', detail: 'Correctamente' });
        this.listarAnioacademico();
      });
    }

  }

  listarAnioacademico() {
    this._anioacademicoServicio._listarAnioacademico().subscribe((dato: any) => {
      this.listar = dato;
      console.log("DATOS:", this.listar);

    });
  }



  eliminarAnioacademico(id: number) {
    if (confirm('Desea eliminar')) {
      this._anioacademicoServicio._eliminarAnioacademico(id).subscribe((respuesta: any) => {

        this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Correctamente' });
        this.listarAnioacademico();
      });
    }
  }
}
