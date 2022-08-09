import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '@servicios/matricula.service';
import { Matricula } from '@modelos/matricula.model';
import { LoginService } from '@servicios/login.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
  styleUrls: ['./listar-matricula.component.scss'],
  //providers: [MessageService]
})
export class ListarMatriculaComponent implements OnInit {

  buscarmatriculaaHM: Matricula[];
  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';
  verdadero = 1;
  falso = 0;
  totalRecords: number;

  datos: Matricula[];
  listaMatricula: any;
  cont = 1;

  pageactual: number = 1;

  public n: number = 0;
  public form: FormGroup;

  __ni1: number;
  legalizadoIdany: any;

  public NivelesStatico: any = [
    { valId: '1', label: 'Uno', checked: false },
    { valId: '2', label: 'Dos', checked: true },
    { valId: '3', label: 'Tres', checked: false },
    { valId: '4', label: 'Cuatro', checked: false },
    { valId: '5', label: 'Cinto', checked: false },
    { valId: '6', label: '6', checked: false },
  ];
  public TrimesreStatico: any = [
    { valId: '1', label: 'Uno', checked: false },
    { valId: '2', label: 'Dos', checked: true },
    { valId: '3', label: 'Tres', checked: false },
    { valId: '4', label: 'Cuatro', checked: false },
  ];

  constructor(
    private _matriculaServicio: MatriculaService,
    private _servicioLogin: LoginService,
    private fb: FormBuilder,
  ) {
  

    this.form = this.fb.group({
      ni1: ['1', [Validators.required]],
    });
  }

  ngOnInit(): void {

    this.nivel().subscribe(result => {
      if (result === '2') {
        this.NivelesStatico[0].checked = true;
        this.NivelesStatico[1].checked = false;
      }
    });


   // this.listarMatriculaLegalizado();
  }

  private nivel(): Observable<string> {
    return of('2').pipe(delay(1000));
  }

  enviarRadio() {
  this.__ni1 = this.form.get('ni1')?.value;
     /*
     this.__tri1 = this.form2.get('tri')?.value;
     this.listarNota2(this.__ni1, this.__tri1); */

    this.listarMatriculaLegalizadoId(this.__ni1);

  }

  listarMatriculaLegalizado() {
    this._matriculaServicio._listarMatriculaLegalizado().subscribe(res => {
      this.datos = res;
      console.log("LISTA MATRICULA", this.datos);

    });
  }

  listarMatriculaLegalizadoId(id: number) {
    this._matriculaServicio._listarMatriculaLegalizadoId(id).subscribe(res => {
      this.legalizadoIdany = res;
      console.log("LEGALIZADO", this.legalizadoIdany);
    });
  }

  /*   eliminarEstudiante(id) {
      this._servicioEstudiante._eliminarEstudiante(id).subscribe((respuesta: any) => {
        this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Correctamente' });
        this.filtrarEstudiante();
      });
    } */


  /*   buscarmatriculaH() {
      this._matriculaServicio.modeloMatriculaH.subscribe(res => {
        this.buscarmatriculaaHM = res;
        //  console.log("DATOS CON REALCION BUSQUEDA", this.buscarmatriculaaH);

      });
    }
    buscarmatriculaM() {
      this._matriculaServicio.modeloMatriculaM.subscribe(res => {
        this.buscarmatriculaaHM = res;
        //  console.log("DATOS CON REALCION BUSQUEDA", this.buscarmatriculaaH);

      });
    }


    buscar(v) {

      if (this._servicioLogin.IsAdmin() == 'Administrador') {
        this._matriculaServicio._buscarmatriculaH(v);
      } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
        this._matriculaServicio._buscarmatriculaM(v);
      }

    }

    crearPdf() {
      const document = this._matriculaServicio.obtenerDatosMatricula();
      pdfMake.createPdf(document).open();
    } */

}
