import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '@servicios/profesor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listaestudiante-prf',
  templateUrl: './listaestudiante-prf.component.html',
  styleUrls: ['./listaestudiante-prf.component.scss']
})
export class ListaestudiantePrfComponent implements OnInit {
  token: any;
  userData: any;
  totalRecords: number;

  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';
  public TrimesreStatico: any = [
    { valId: '1', label: 'Uno', checked: false },
    { valId: '2', label: 'Dos', checked: true },
    { valId: '3', label: 'Tres', checked: false },
    { valId: '4', label: 'Cuatro', checked: false },
  ];
  __ni1: number;
  profesorId: any;
  public form: FormGroup;

  constructor(
    private _profesorIdServicio: ProfesorService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      ni1: ['1', [Validators.required]],
    });
  }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA INFORMACION
   // console.log("DATOS RELACIONADOS: ", this.userData.pro_id);

   /*  this._profesorIdServicio._matriculaEstudiateProfesor(this.userData.pro_id).subscribe(r => {
      this.profesorId = r;
      console.log("PROFESOR ID", this.profesorId);
    }); */
  }

  enviarRadio() {
    this.__ni1 = this.form.get('ni1')?.value;

    this.matrii(this.__ni1);

  }

  matrii(id2: number) {

    this._profesorIdServicio._matriculaEstudiateProfesor(this.userData.pro_id,id2).subscribe(r => {
      this.profesorId = r;
      console.log("PROFESOR ID", this.profesorId);
    });

  }


}
