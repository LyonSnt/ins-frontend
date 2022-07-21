
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstudianteService } from '@servicios/estudiante.service';
import { LoginService } from '@servicios/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.scss']
})
export class ListarEstudianteComponent implements OnInit {

  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';
  datos: Estudiante2[];

  constructor
    (
      private _servicioEstudiante: EstudianteService,
      private toastr: ToastrService,
      private _servicioLogin: LoginService
    ) {

    if (this._servicioLogin.IsAdmin() == 'Administrador') {
     this.listarEstudianteH();
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this.listarEstudianteM();
    }

  }

  ngOnInit(): void {

  }


  listarEstudianteH() {
    this._servicioEstudiante.allestudent.subscribe(res => {
      this.datos = res;
     // console.log("DATOS HOMBRES", this.datos);

    });
  }

  listarEstudianteM() {
    this._servicioEstudiante.allestudent2.subscribe(res => {
      this.datos = res;
    //  console.log("DATOS MUJERES", this.datos);

    });


  }

  eliminar(id: number) {
    this._servicioEstudiante._eliminar(id).subscribe((respuesta: any) => {
      this.toastr.error(JSON.stringify('El sexo fue eliminado con éxito'),
        JSON.stringify('Registro Eliminado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.listarEstudianteH();
    });
  }


  buscar(v) {

    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this._servicioEstudiante._estudianteH(v);
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this._servicioEstudiante._estudianteM(v);
    }

  }

}
