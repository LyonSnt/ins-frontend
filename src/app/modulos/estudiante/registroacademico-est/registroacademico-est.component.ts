import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '@servicios/estudiante.service';
import { MatriculaService } from '@servicios/matricula.service';

@Component({
  selector: 'app-registroacademico-est',
  templateUrl: './registroacademico-est.component.html',
  styleUrls: ['./registroacademico-est.component.scss']
})
export class RegistroacademicoEstComponent implements OnInit {

  token: any;
  userData: any;
  directorio: any = 'http://127.0.0.1:8000/storage/img_profesor/';
  estudianteId: any;
  estudianteIdMatricula: any;
  totalRecords: number;

  constructor(
    private _estudianteIdServicio: EstudianteService,
    private _matriculaServicio: MatriculaService
  ) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA INFORMACION
    console.log("DATOS RELACIONADOS: ", this.userData);

    this._estudianteIdServicio._buscarEstudiante2PorId(this.userData.est_id).subscribe(r => {
      this.estudianteId = r;
      console.log("ESTUDIANTE ID", this.estudianteId);

     // console.log("DATO DE UNO: ", this.estudianteId.data.est_cedula);

    });

    this._matriculaServicio._buscarMatriculaEstudiantePorId(this.userData.est_id).subscribe(r => {
      this.estudianteIdMatricula = r;
      console.log("ESTUDIANTE ID Matricula", this.estudianteIdMatricula);

     // console.log("DATO DE UNO: ", this.estudianteId.data.est_cedula);

    });
  }

}
