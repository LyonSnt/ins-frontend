import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '@servicios/estudiante.service';

@Component({
  selector: 'app-dashboard-est',
  templateUrl: './dashboard-est.component.html',
  styleUrls: ['./dashboard-est.component.scss']
})
export class DashboardEstComponent implements OnInit {

  token: any;
  userData: any;
  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';
  estudianteId: any;
  contador: any;
  suma: any;
  aux: any;
  aux2: any;
  estudianteIdNota: any;
  totalRecords: number;

  constructor(
    private _estudianteIdServicio: EstudianteService,
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

    this._estudianteIdServicio._ContadorMatriculaIdEst(this.userData.est_id).subscribe(r => {
      this.contador = r;
      for(this.aux of this.contador){
        console.log("CONTADOR", this.aux);
      }
    });
    this._estudianteIdServicio._SumaNotaIdEst(this.userData.est_id).subscribe(r => {
      this.suma = r;
      for(this.aux2 of this.suma){
        console.log("SUMA", this.aux2);
      }
    });


  }

}
