import { Estudiante2 } from '@modelos/estudiante2.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '@servicios/estudiante.service';
import { MatriculaService } from '@servicios/matricula.service';
import { ProfesorService } from '@servicios/profesor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  historialEst: any;
  matriculadosAny: any;
  historialProfesorAny: any;
  matriculasAnuladasAny: any;
  constructor(
    private ruteador: Router,
    private _estudianteServicio: EstudianteService,
    private _matriculaServicio: MatriculaService,
    private _profesorServicio: ProfesorService
  ) { }

  ngOnInit(): void {
    this.historialEstudiante();
    this.matriculados();
    this.historialProfesores();
    this.matriculasAnuladas();
  }

  historialEstudiante() {
    this._estudianteServicio._historialEstudiante().subscribe(res => {
      this.historialEst = res;
      console.log("HIST ESTU:", this.historialEst);

    });
  }

  matriculados() {
    this._matriculaServicio._matriculados().subscribe(res => {
      this.matriculadosAny = res;
      console.log("MATRICULADOS:", this.matriculadosAny);
    });
  }

  historialProfesores() {
    this._profesorServicio._historialProfesores().subscribe(res => {
      this.historialProfesorAny = res;
      console.log("HIS PROFE:", this.historialProfesorAny);
    });
  }
  matriculasAnuladas() {
    this._matriculaServicio._matriculasAnuladas().subscribe(res => {
      this.matriculasAnuladasAny = res;
      console.log("ANULADOS:", this.matriculasAnuladasAny);
    });
  }

}
