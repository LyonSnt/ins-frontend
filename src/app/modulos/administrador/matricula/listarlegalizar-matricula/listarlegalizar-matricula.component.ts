import { Component, OnInit } from '@angular/core';
import { Matricula } from '@modelos/matricula.model';
import { MatriculaService } from '@servicios/matricula.service';

@Component({
  selector: 'app-listarlegalizar-matricula',
  templateUrl: './listarlegalizar-matricula.component.html',
  styleUrls: ['./listarlegalizar-matricula.component.scss']
})
export class ListarlegalizarMatriculaComponent implements OnInit {

  buscarmatriculaaHM: Matricula[];
  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';
  verdadero = 1;
  falso = 0;
  totalRecords: number;

  datos: Matricula[];
  listaMatricula: any;
  cont = 1;

  pageactual: number = 1;

  public n: number = 0;


  constructor(
    private _matriculaServicio: MatriculaService,
  ) { }

  ngOnInit(): void {


    this.listarMatriculaLegalizar();
  }

  listarMatriculaLegalizar() {
    this._matriculaServicio._listarMatriculaLegalizar().subscribe(res => {
      this.datos = res;
      console.log("LISTA MAT LEGA", this.datos);

    });
  }
/*  */

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
