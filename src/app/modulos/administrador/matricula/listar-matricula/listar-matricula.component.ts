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
  styleUrls: ['./listar-matricula.component.scss'],
  //providers: [MessageService]
})
export class ListarMatriculaComponent implements OnInit {

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
    private _servicioLogin: LoginService
  ) { }

  ngOnInit(): void {


    this.listarMatriculaLegalizado();
  }

  listarMatriculaLegalizado() {
    this._matriculaServicio._listarMatriculaLegalizado().subscribe(res => {
      this.datos = res;
      console.log("LISTA MATRICULA", this.datos);

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
