import { ISexo } from './../../../modelos/isexo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-sexo',
  templateUrl: './editar-sexo.component.html',
  styleUrls: ['./editar-sexo.component.scss']
})
export class EditarSexoComponent implements OnInit {
  idSexo: any;
  sexo: ISexo[];
  dato2: any;
  form: FormGroup;
  public datos: ISexo = {} as ISexo;
  public datos3: ISexo = {} as ISexo;
  public mensajeError: string | null = null;
  constructor(
    private _servicioSexo: SexoService,
    private toastr: ToastrService,
    private activarRuter: ActivatedRoute,
    private ruteador: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      sex_descripcion: ['', Validators.required]

    });
  }

  ngOnInit(): void {


    /*  this.id = this.activarRuter.snapshot.paramMap['id'];
      console.log(this.id);

      this._servicioSexo.find2(this.id).subscribe((dato: ISexo) => {
        this.sexo = dato;
        console.log(this.sexo);
      });
      */
    this.activarRuter.paramMap.subscribe((param: ParamMap) => {
      this.idSexo = param.get('id');
      console.log(this.idSexo);
      this.obtenerDato();

    });


    /*  const routParams = this.activarRuter.snapshot.paramMap;
     this.idSexo = Number(routParams.get('id'));
     console.log(this.idSexo);
     this._servicioSexo.find(this.idSexo).subscribe((dato: any) => {
       this.idSexo = dato;
       console.log(this.idSexo);

     });
  */

  }

  obtenerDato() {

    if (this.idSexo) {
      this._servicioSexo._buscarPorId(this.idSexo).subscribe((dato: ISexo) => {
        this.datos = dato;
        console.log(this.datos);
      },
        (error) => {
          this.mensajeError = error;
        });
    }
  }

  editar() {
    console.log(this.form.value);
    this._servicioSexo._editar(this.idSexo, this.form.value).subscribe(res => {
      console.log('Actualizado Correctamente');
      this.toastr.warning(JSON.stringify('El sexo fue actualizado con exito'),
        JSON.stringify('Actualizado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.ruteador.navigateByUrl('/panel/sexo/listar');
    })
  }


}
