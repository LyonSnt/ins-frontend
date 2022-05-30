import { Router } from '@angular/router';
import { IComunidad } from './../../../modelos/icomunidad';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComunidadService } from '@servicios/comunidad.service';

@Component({
  selector: 'app-agregar-comunidad',
  templateUrl: './agregar-comunidad.component.html',
  styleUrls: ['./agregar-comunidad.component.scss']
})
export class AgregarComunidadComponent implements OnInit {
  public form: FormGroup;
  listarch: IComunidad[] = [];

  data2: any;
  listar: any;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioComunidad: ComunidadService,
    private ruteador: Router

  ) {
    this.form = this.fb.group({

      com_descripcion: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.listarComunidad();
  }


  crearComunidad() {

    if (!this.form.valid) {
      return;
    }
    this.recarga = true;

    this._servicioComunidad._create(this.form.value).subscribe(r => {

      this.recarga = false;
      this.listarComunidad();
      this.toastr.success(JSON.stringify('La comunidad fue registrada con exito'),
        JSON.stringify('Registrado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.form.reset();
    });
  }

  listarComunidad() {
    this._servicioComunidad._listarComunidad().subscribe((dato: any) => {
      this.listar = dato;
    });
  }

  
  eliminarComunidad(id: number) {
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
