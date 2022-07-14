import { Component, OnInit } from '@angular/core';
import { LoginService } from '@servicios/login.service';
import { MatriculaService } from '@servicios/matricula.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-imprimir-matricula',
  templateUrl: './imprimir-matricula.component.html',
  styleUrls: ['./imprimir-matricula.component.scss']
})
export class ImprimirMatriculaComponent implements OnInit {


  imprimirmatriculaHH: any;
  constructor(
    private _matriculaServicio: MatriculaService,
    private _servicioLogin: LoginService
  ) { }

  ngOnInit(): void {

    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this.imprimirmatriculaH();

    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {

    }
  }
  imprimirmatriculaH() {
    this._matriculaServicio._imprimirmatricula().subscribe(res => {
      this.imprimirmatriculaHH = res;
      // console.log("IMPRIMIR", this.imprimirmatriculaHH);

    });
  }

  crearPdf() {
    const document = this._matriculaServicio.obtenerDatosMatricula();
    pdfMake.createPdf(document).open();


  }



}
