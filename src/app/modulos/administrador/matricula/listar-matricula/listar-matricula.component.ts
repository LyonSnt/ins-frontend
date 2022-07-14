import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '@servicios/matricula.service';
import { Matricula } from '@modelos/matricula.model';
import { LoginService } from '@servicios/login.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-listar-matricula',
  templateUrl: './listar-matricula.component.html',
  styleUrls: ['./listar-matricula.component.scss']
})
export class ListarMatriculaComponent implements OnInit {

  buscarmatriculaaHM: Matricula[];

  verdadero = 1;
  falso = 0;

  cont = 1;

  pageactual: number = 1;

  public n: number = 0;


  constructor(
    private _matriculaServicio: MatriculaService,
    private _servicioLogin: LoginService
  ) { }

  ngOnInit(): void {

    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this.buscarmatriculaH();

    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this.buscarmatriculaM();
    }

  }



  buscarmatriculaH() {
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
  }

  /* creaPdfPrueba() {
    const pdfData: any = {
      content: [
        {
          text: 'Holaaa'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfData);
    pdf.open();
  }
 */
}
