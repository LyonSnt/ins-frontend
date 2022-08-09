import { Nota } from '@modelos/nota';
import { Component, OnInit } from '@angular/core';
import { Matricula } from '@modelos/matricula.model';
import { Prueba } from '@modelos/Prueba';
import { LoginService } from '@servicios/login.service';
import { MatriculaService } from '@servicios/matricula.service';
import { NotaService } from '@servicios/nota.service';
import { SexoService } from '@servicios/sexo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from '@servicios/estudiante.service';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.component.html',
  styleUrls: ['./agregar-nota.component.scss']
})
export class AgregarNotaComponent implements OnInit {

  __listarNota: any;
  __listarNota2: any;
  pageactual: number = 1;
  __notaId: number | undefined;
  accion = 'Agregar';
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  datoany: any;
  __sexo: any;
  nii: any;
  isSelected: boolean = true;

  __ni1: number;


  __tri1: number;



  __desactivo: boolean = false;

  __nivel = 1;
  __trime = 1;


  sucursalArray: Prueba[] = [
    { sex_descripcion: "MASCULINO", sex_abreviatura: "H" },
    { sex_descripcion: "FEMENINO", sex_abreviatura: "M" },
    { sex_descripcion: "MASCULINO", sex_abreviatura: "H" },


  ];

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

  totalRecords: number;
  constructor(
    private _matriculaServicio: MatriculaService,
    private _servicioLogin: LoginService,
    private _sexoServ: SexoService,
    private _notaServicio: NotaService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _servicioEstudiante: EstudianteService,



  ) {

    this.form = this.fb.group({
      n1: ['', [Validators.required]],
      n2: ['', [Validators.required]],
      n3: ['', [Validators.required]],
      n4: ['', [Validators.required]],
      ni1: ['', [Validators.required]],
      idv: ['', [Validators.required]],
      estidv: ['', [Validators.required]],
      nividv: ['', [Validators.required]],
      triidv: ['', [Validators.required]],

    });
    this.form2 = this.fb.group({
      ni1: ['1', [Validators.required]],
      tri: ['1', [Validators.required]],
    });
    /*   this.form3 = this.fb.group({
        tri: ['', [Validators.required]],
      }); */

  }

  ngOnInit(): void {

    this.nivel().subscribe(result => {
      if (result === '2') {
        this.NivelesStatico[0].checked = true;
        this.NivelesStatico[1].checked = false;
      }
    });
    this.trimestre().subscribe(result => {
      if (result === '2') {
        this.TrimesreStatico[0].checked = true;
        this.TrimesreStatico[1].checked = false;
      }
    });

  }

  private nivel(): Observable<string> {
    return of('2').pipe(delay(1000));
  }
  private trimestre(): Observable<string> {
    return of('2').pipe(delay(1000));
  }

  enviarRadio() {
    this.__ni1 = this.form2.get('ni1')?.value;
    this.__tri1 = this.form2.get('tri')?.value;
    this.listarNota2(this.__ni1, this.__tri1);

  }

  listarNota2(id: number, id2: number) {
    this._notaServicio._listarNota2(id, id2).subscribe(res => {
      this.__listarNota2 = res;
      console.log("DATOS NOTA2", this.__listarNota2);
    });
  }


  enviarNotaAInput(notaany: any) {
    this.accion = 'Editar';
    this.__notaId = notaany.notidlav;
    this.form.patchValue({
      n1: notaany.nota1,
      n2: notaany.nota2,
      n3: notaany.nota3,
      n4: notaany.nota4,
      idv: notaany.id,
      estidv: notaany.estid,
      nividv: notaany.nivid,
      triidv: notaany.triid,
    });

    //this.focusInputt();
  }

  guardarNota() {

    const notaV: any = {
      nota1: this.form.get('n1')?.value,
      nota2: this.form.get('n2')?.value,
      nota3: this.form.get('n3')?.value,
      nota4: this.form.get('n4')?.value,
      estid: this.form.get('estidv')?.value,
      id: this.form.get('idv')?.value,
      nivid: this.form.get('nividv')?.value,
      triid: this.form.get('triidv')?.value,

    }

    if (this.__notaId == undefined) {
      this.toastr.error(JSON.stringify('Seleccione algun dato!!'),
        JSON.stringify('ERROR'), {
        timeOut: 2000,
        progressBar: true
      });
    } else {

      notaV.notidlav = this.__notaId;
      this._notaServicio._actualizarNota(this.__notaId, notaV).subscribe(r => {
        this.datoany = r;
        console.log("DATOS", this.datoany);
        /*  this.recarga = false; */
        /*   */

        /* PONER AQUI PARA QUE SE ACTUALIZE TBL ESTUDIANTE */

        this.form.reset();
        this.accion = 'Agregar';
        this.__notaId = undefined;
        this.toastr.info(JSON.stringify('La nota fue registrado con exito'),
          JSON.stringify('Actualizado'), {
          timeOut: 2000,
          progressBar: true
        });
        this.listarNota2(this.__ni1, this.__tri1);
      });
    }


  }

  test() {
    for (let suc of this.sucursalArray) {
      delete suc.id;
      console.log("ARREGLO:", suc);
      /*  this._matriculaServicio._createMatricula(suc).subscribe(res => {

       }); */

      /* this.sucursalesService.saveSucursal(suc).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.error(err);
        }
      ) */
    }
  }

}
