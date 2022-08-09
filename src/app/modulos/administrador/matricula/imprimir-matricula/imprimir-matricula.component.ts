import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _servicioLogin: LoginService,
    private ruteador: Router
  ) { }

  ngOnInit(): void {

    this.imprimirmatriculaH();
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
    // window.location.href = "/admin/matricula/listamatricular";
    // this.ruteador.navigateByUrl('/admin/matricula/listamatricular');
    //this.ruteador.navigateByUrl('/admin/matricula/listamatricular');
    window.setTimeout(function () {

      // REDIRIGIMOS A LOS 2 SEGUNDOS
      window.location.href = "/admin/matricula/listamatricular";

    }, 2000);

    // window.location.reload();
  }

  nuevoEstudiante() { //METODO DE PRUEBA
    //this.ruteador.navigate(['admin/estudiante/agregar']);
    window.location.href = "admin/estudiante/agregar";
  }



}
