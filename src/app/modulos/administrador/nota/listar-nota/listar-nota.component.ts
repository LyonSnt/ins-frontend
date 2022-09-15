import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstudianteService } from '@servicios/estudiante.service';
import { NotaService } from '@servicios/nota.service';

@Component({
  selector: 'app-listar-nota',
  templateUrl: './listar-nota.component.html',
  styleUrls: ['./listar-nota.component.scss']
})
export class ListarNotaComponent implements OnInit {

  public estudianteId: string | null = null;
  listaEstudiante: Estudiante2 = {} as Estudiante2;
  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';

  estudianteIdNotaProfe: any;
  token: any;
  userData: any;
  totalRecords: number;
  estudianteIdNota: any;


  constructor(
    private activarRuta: ActivatedRoute,
    private _estudianteServicio: EstudianteService,
    private _notaServicio: NotaService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA INFORMACION
    console.log("DATO PROF:", this.userData);


    this.activarRuta.paramMap.subscribe(parametro => {
      this.estudianteId = parametro.get('id');
      console.log("ID ESTUDIANTE:", this.estudianteId);
    });

      if (this.estudianteId) {
        this._estudianteServicio._buscarEstudiantePorId2(this.estudianteId).subscribe((dato: Estudiante2) => {
          this.listaEstudiante = dato;
          console.log("DATO ESTU:", this.listaEstudiante);

        });
      }

    this._notaServicio._buscarNotaPorId(this.estudianteId).subscribe(r => {
      this.estudianteIdNota = r;
      console.log("ESTUDIANTE ID NOTA", this.estudianteIdNota);

     // console.log("DATO DE UNO: ", this.estudianteId.data.est_cedula);

    });

  }

  /*   matrii(id2: number) {

      this._profesorIdServicio._matriculaEstudiateProfesor(this.userData.pro_id,id2).subscribe(r => {
        this.profesorId = r;
        console.log("PROFESOR ID", this.profesorId);
      });

    } */
  public enviarHTML() {
    return Object.keys(this.listaEstudiante).length > 0;
  }

}

