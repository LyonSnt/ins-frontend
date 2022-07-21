import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ISexo } from '@modelos/isexo';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-sexo',
  templateUrl: './listar-sexo.component.html',
  styleUrls: ['./listar-sexo.component.scss']
})
export class ListarSexoComponent implements OnInit {

  enviaraHtml: any;
  enviaraHtml2: any;
  public form: FormGroup;
  data2: any;
  data3: any;
  idEstudiante: any;
  public mensajeError: string | null = null;

  constructor
    (
      private _servicioSexo: SexoService,
      private toastr: ToastrService,
      private ruteador: ActivatedRoute,
      private fb: FormBuilder,

  ) {

  }

  ngOnInit(): void {

   /*  const routParams = this.ruteador.snapshot.paramMap;
    this.enviaraHtml2 = Number(routParams.get('id'));
 */
    this.ruteador.paramMap.subscribe((param: ParamMap) => {
      this.idEstudiante = param.get('id');
      // console.log("ID EN PARAM", this.idEstudiante);
    });//ESTA PARTE TRABAJA CONJUNTAMENTE CON EL OBTENER DATOS

    console.log("DATOSEXO", this.idEstudiante);
    this.obtenerDato();

    this.form = this.fb.group({

      sex_descripcion: [this.idEstudiante.sex_descripcion, []],
      sex_abreviatura: ['', [Validators.required]],
    });

    this.listar();
  }

  obtenerDato() {

    if (this.idEstudiante) {
      this._servicioSexo._buscarSexoPorId(this.idEstudiante).subscribe((dato: ISexo) => {
        this.data3 = dato;
          console.log("DATO ESTUDIANTE: ", this.data3.sex_descripcion);
      },
        (error) => {
          this.mensajeError = error;
        });
    }
  }

  listar() {
    this._servicioSexo._listarSexo().subscribe((dato: any) => {
      this.enviaraHtml = dato;
    });
  }


  crear() {

    if (!this.form.valid) {
      return;
    }

    //   const modelo = this.lessons.value


    /*     for (let suc of modelo) { */
    this._servicioSexo._createSexo(this.form.value).subscribe(r => {
      this.data2 = r;
      console.log("PERSONA: ", this.data2);
    });
    //   }




  }

  /*  eliminar(id: number) {
     this._servicioSexo._eliminar(id).subscribe((respuesta: any) => {

       this.toastr.error(JSON.stringify('El sexo fue eliminado con éxito'),
         JSON.stringify('Registro Eliminado'), {
         timeOut: 2000,
         progressBar: true
       });
       this.listar();
     });
   } */

}
