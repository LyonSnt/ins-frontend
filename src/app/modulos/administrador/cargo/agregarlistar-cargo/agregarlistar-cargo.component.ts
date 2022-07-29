import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICargo } from '@modelos/icargo';
import { CargoService } from '@servicios/cargo.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregarlistar-cargo',
  templateUrl: './agregarlistar-cargo.component.html',
  styleUrls: ['./agregarlistar-cargo.component.scss'],
  providers: [MessageService]
})
export class AgregarlistarCargoComponent implements OnInit {

  form: FormGroup;
  listarch: ICargo[] = [];

  datoCrear: any;
  datoEditar: any;
  listar: any;
  id: number | undefined;
  __cargoId: number | undefined;
  accion = 'Agregar';
  pageactual: number = 1;
  totalRecords: number;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private _cargoServicio: CargoService,
    private ruteador: Router,
    private messageService: MessageService

  ) {
    this.form = this.fb.group({
      descripcionv: ['', [Validators.required, Validators.minLength(4)]],


    });

  }

  ngOnInit(): void {

    this.listarCargo();
  }


  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }
  enviarCargoAInput(cargoDato: any) {
    this.accion = 'Editar';
    this.__cargoId = cargoDato.id;
    this.form.patchValue({
      descripcionv: cargoDato.car_descripcion
    });

  }

  crearCargo() {
    const cargo: any = {
      car_descripcion: this.form.get('descripcionv')?.value,


    }
    if (this.__cargoId == undefined) {
      this._cargoServicio._crearCargo(this.form.value).subscribe(r => {
        this.datoCrear = r;
        console.log("DATOS", this.datoCrear);
        this.recarga = false;
        this.listarCargo();
        this.messageService.add({severity:'success', summary:'Guardado', detail:'Correctamente'});
        this.form.reset();
      });
    } else {
      cargo.id = this.__cargoId;
      this._cargoServicio._editarCargo(this.__cargoId, cargo).subscribe(r => {
        this.datoEditar = r;
        /*  console.log("DATOS", this.data2); */
        /*  this.recarga = false; */
        /*   */

        this.form.reset();
        this.accion = 'Agregar';
        this.__cargoId = undefined;
        this.messageService.add({severity:'info', summary:'Actualizado', detail:'Correctamente'});
        this.listarCargo();
      });
    }

  }

  listarCargo() {
    this._cargoServicio._listarCargo().subscribe((dato: any) => {
      this.listar = dato;
    });
  }



  eliminarCargo(id: number) {
    if(confirm('Desea eliminar')){
      this._cargoServicio._eliminarCargo(id).subscribe((respuesta: any) => {

        this.messageService.add({severity:'error', summary:'Eliminado', detail:'Correctamente'});
        this.listarCargo();
      });
    }
  }


}
