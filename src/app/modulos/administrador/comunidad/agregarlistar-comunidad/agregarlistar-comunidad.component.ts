import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IComunidad } from '@modelos/icomunidad';
import { ComunidadService } from '@servicios/comunidad.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregarlistar-comunidad',
  templateUrl: './agregarlistar-comunidad.component.html',
  styleUrls: ['./agregarlistar-comunidad.component.scss']
})
export class AgregarlistarComunidadComponent implements OnInit, AfterViewInit {

  @ViewChild('cominput') focusInput!: ElementRef<HTMLInputElement>;
  form!: FormGroup;
  listarch: IComunidad[] = [];

  data2: any;
  listar: any;
  id: number | undefined;
  accion = 'Agregar';
  pageactual: number = 1;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioComunidad: ComunidadService,
    private ruteador: Router

  ) {
    this.form = this.fb.group({
      com_descripcion: ['', [Validators.required]],


    });

  }


  ngOnInit() {


    this.listarComunidad();
  }

  ngAfterViewInit(): void {
    this.focusInputt();
  }

  focusInputt() {
    this.focusInput.nativeElement.focus();
  }

  guardarComunidad() {

    const comunidad: any = {
      com_descripcion: this.form.get('com_descripcion')?.value,

    }

    if (this.id == undefined) {
      this._servicioComunidad._create(this.form.value).subscribe(r => {
        this.data2 = r;
        console.log("DATOS", this.data2);
        this.recarga = false;
        this.listarComunidad();
        this.toastr.success(JSON.stringify('La comunidad fue registrada con exito'),
          JSON.stringify('Registrado'), {
          timeOut: 2000,
          progressBar: true
        });
        this.form.reset();
      });
    } else {

      comunidad.id = this.id;
      this._servicioComunidad._actualizarComunidad(this.id, comunidad).subscribe(r => {
        this.data2 = r;
        /*  console.log("DATOS", this.data2); */
        /*  this.recarga = false; */
        /*   */

        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info(JSON.stringify('La comunidad fue actualizada con exito'),
          JSON.stringify('Registrado'), {
          timeOut: 2000,
          progressBar: true
        });
        this.listarComunidad();
      });
    }


  }

  listarComunidad() {
    this._servicioComunidad._listarComunidad().subscribe((dato: any) => {
      this.listar = dato;
    });
  }


  eliminarComunidad(id: number) {
    if(confirm('Desea eliminar')){
      this._servicioComunidad._eliminar(id).subscribe((respuesta: any) => {
        this.toastr.error(JSON.stringify('La comunidad fue eliminada con exito'),
          JSON.stringify('Registro Eliminado'), {
          timeOut: 2000,
          progressBar: true
        });
        this.listarComunidad();
      });
    }
  }

  editarComunidad(comuni: any) {
    this.accion = 'Editar';
    this.id = comuni.id;
    this.form.patchValue({
      com_descripcion: comuni.com_descripcion
    });
    this.focusInputt();
  }

}
