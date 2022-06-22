import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '@servicios/estudiante.service';

@Component({
  selector: 'app-perfil-est',
  templateUrl: './perfil-est.component.html',
  styleUrls: ['./perfil-est.component.scss']
})
export class PerfilEstComponent implements OnInit {
  token: any;
  userData: any;
  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';


  estudianteId: any;
  constructor(
    private _estudianteIdServicio: EstudianteService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA INFORMACION
    console.log("DATOS RELACIONADOS: ", this.userData.est_id);

    this._estudianteIdServicio._buscarEstudiantePorId(this.userData.est_id).subscribe(r => {
      this.estudianteId = r;
      console.log("ESTUDIANTE ID", this.estudianteId);

      console.log("DATO DE UNO: ", this.estudianteId.data.est_cedula);

    });

  }

}
