import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { ISexo } from '@modelos/isexo';
import { Prueba } from '@modelos/Prueba';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-sexo',
  templateUrl: './agregar-sexo.component.html',
  styleUrls: ['./agregar-sexo.component.scss']
})
export class AgregarSexoComponent implements OnInit {

  /*
    public form: FormGroup; */
  public form: FormGroup;
  listarch: ISexo[] = [];
  sucursalArray3: Prueba[] = [
    { sex_descripcion: "MASCULINO", sex_abreviatura: "H" },
    { sex_descripcion: "FEMENINO", sex_abreviatura: "M" },
    { sex_descripcion: "MASCULINO", sex_abreviatura: "H" },
  ];

  sucursalArray2: Prueba[];
  invoice: Prueba = {} as Prueba;

  data2: any;
  listar: any;

  //public interests;
  _listado = {};

  recarga = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioSexo: SexoService,
    private ruteador: Router

  ) {
    this.form = this.fb.group({

      sex_descripcion: ['', [Validators.required]],
      sex_abreviatura: ['', [Validators.required]],
    /*   lessons: this.fb.array([
        this.fb.group({ sex_descripcion: '' }),
      //  this.fb.group({ sex_abreviatura: '' }),
      ]), */

    });

  }



  ngOnInit(): void {
  }


  get lessons(): FormArray {
    return this.form.get('lessons') as FormArray;
  }

  get per() {
    return this.form.controls.intereses;
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







  /*   for(let suc of obj) {
      console.log("PERSONA: ", suc);

        this._servicioSexo._createSexo(modeloArray).subscribe(r => {
          this.data2 = r;
          console.log("PERSONA: ", this.data2);
        });

    } */


}
