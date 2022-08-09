import { Estudiante2 } from './../../../../modelos/estudiante2.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from '@servicios/estudiante.service';

@Component({
  selector: 'app-vista-estudiante',
  templateUrl: './vista-estudiante.component.html',
  styleUrls: ['./vista-estudiante.component.scss']
})
export class VistaEstudianteComponent implements OnInit {

  public estudianteId: string | null = null;
  listaEstudiante: Estudiante2 = {} as Estudiante2;
  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';


  constructor(
    private activarRuta: ActivatedRoute,
    private _estudianteServicio: EstudianteService
  ) { }

  ngOnInit(): void {
    this.activarRuta.paramMap.subscribe(parametro => {
      this.estudianteId = parametro.get('id');
      console.log("ESTUDIANTE:", this.estudianteId);
    });

    if (this.estudianteId) {
      this._estudianteServicio._buscarEstudiantePorId2(this.estudianteId).subscribe((dato: Estudiante2) => {
        this.listaEstudiante = dato;
        console.log("DATO ESTU:", this.listaEstudiante);

      });
    }

  }

  public enviarHTML() {
    return Object.keys(this.listaEstudiante).length > 0;
  }

}
