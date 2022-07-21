import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '@servicios/profesor.service';

@Component({
  selector: 'app-listaestudiante-prf',
  templateUrl: './listaestudiante-prf.component.html',
  styleUrls: ['./listaestudiante-prf.component.scss']
})
export class ListaestudiantePrfComponent implements OnInit {
  token: any;
  userData: any;
  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';


  profesorId: any;

  constructor(
    private _profesorIdServicio: ProfesorService
  ) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA INFORMACION
    console.log("DATOS RELACIONADOS: ", this.userData.pro_id);

    this._profesorIdServicio._matriculaEstudiateProfesor(this.userData.pro_id).subscribe(r => {
      this.profesorId = r;
      console.log("PROFESOR ID", this.profesorId);


    });
  }

}
