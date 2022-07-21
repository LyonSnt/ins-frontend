import { NotaService } from './../../../servicios/nota.service';
import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '@servicios/estudiante.service';
import { MatriculaService } from '@servicios/matricula.service';

@Component({
  selector: 'app-notas-est',
  templateUrl: './notas-est.component.html',
  styleUrls: ['./notas-est.component.scss']
})
export class NotasEstComponent implements OnInit {

  token: any;
  userData: any;
  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';
  estudianteId: any;
  estudianteIdNota: any;

  constructor(
    private _estudianteIdServicio: EstudianteService,
    private _matriculaServicio: MatriculaService,
    private _notaServicio: NotaService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA INFORMACION
    console.log("DATOS RELACIONADOS NOTA: ", this.userData);

    this._estudianteIdServicio._buscarEstudiante2PorId(this.userData.est_id).subscribe(r => {
      this.estudianteId = r;
      console.log("ESTUDIANTE ID", this.estudianteId);

     // console.log("DATO DE UNO: ", this.estudianteId.data.est_cedula);

    });

    this._notaServicio._buscarNotaPorId(this.userData.est_id).subscribe(r => {
      this.estudianteIdNota = r;
      console.log("ESTUDIANTE ID NOTA", this.estudianteIdNota);

     // console.log("DATO DE UNO: ", this.estudianteId.data.est_cedula);

    });
  }

}
