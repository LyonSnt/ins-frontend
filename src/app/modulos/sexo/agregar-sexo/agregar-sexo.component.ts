import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { ISexo } from '@modelos/isexo';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-sexo',
  templateUrl: './agregar-sexo.component.html',
  styleUrls: ['./agregar-sexo.component.scss']
})
export class AgregarSexoComponent implements OnInit {


  public form: FormGroup;
  listarch: ISexo[] = [];

  data2: any;
  listar: any;

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioSexo: SexoService,
    private ruteador: Router

  ) {
    this.form = this.fb.group({

      sex_descripcion: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }

 /*  crear() {

    if (!this.form.valid) {
      return;
    }

    this._servicioSexo._create(this.form.value).subscribe(r => {

      this.toastr.success(JSON.stringify('El sexo fue registrada con exito'),
        JSON.stringify('Registrado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.ruteador.navigateByUrl('/panel/sexo/listar')

    });
  } */

  nav() {
    this.ruteador.navigateByUrl('/panel/sexo/agregar');
  }

}
