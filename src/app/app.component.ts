import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PruebaService } from './servicios/prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public listar: any;
  public prueba: any;
  public form: FormGroup;

  constructor(
    private _servicioPrueba: PruebaService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    /* const routParams = this.route.snapshot.paramMap;
    this.listar = Number(routParams.get('id'));
    console.log(this.listar); */

   /*  this.listarPrueba2();
  } */
  //


 /*  listarPrueba2() {
    this._servicioPrueba.listarPrueba11().subscribe((respuesta: any) => {
      this.listar = respuesta;
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    this._servicioPrueba.crear(this.form.value).subscribe(r => {
      this.listarPrueba2();
    });
  }

  eliminar2(id: number) {
    this._servicioPrueba.eleiminar(id).subscribe((respuesta: any) => {
      this.listarPrueba2();
      // location.reload()
    },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  actua(id: number) {
    this._servicioPrueba.find(id).subscribe((data: any) => {
      this.prueba = data;
      console.log(this.prueba);
    });

  } */
}


}


