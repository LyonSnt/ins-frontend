
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

  enviaraHtml: any;

  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';

  datos: Estudiante2[];
  query: string = '';
  page: any = 1;
  limit: any = 3;
  skip: any;
  filterestudiante: '';

  constructor
    (
      private _servicioEstudiante: EstudianteService,
      private toastr: ToastrService,
      private ruteador: ActivatedRoute,
      private _servicioLogin: LoginService
    ) {

    /*  this._servicioEstudiante.allestudent.subscribe(res => {
       this.datos = res;
       console.log("DATOS DEL ESTUDIANTE3", this.datos);

     }); */
    if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this.listarEstudianteH();
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this.listarEstudianteM();
    }

  }

  ngOnInit(): void {


    /*    const routParams = this.ruteador.snapshot.paramMap;
       this.enviaraHtml = Number(routParams.get('id'));
       console.log(" LISTA ESTUDIANTE: ", this.enviaraHtml);
    */


  }


  listarEstudianteH() {
    /*    this._servicioEstudiante._listarEstudianteH().subscribe((dato: any) => {
         this.enviaraHtml = dato;
         //   console.log("DATO EN LISTAR", this.enviaraHtml);
       }); */

    if (this.page == 1) {
      this.skip = 0;
    } else {
      this.skip = (this.page - 1) * this.limit;
    }
    var respuestObj = {
      'limit': this.limit,
      'skip': this.skip
    }

 //   console.log("PAGINA", respuestObj);

    this._servicioEstudiante.allestudent.subscribe(res => {
      this.datos = res;
     // console.log("DATOS HOMBRES", this.datos);

    });
  }

  listarEstudianteM() {
    /*     this._servicioEstudiante._listarEstudianteM().subscribe((dato: any) => {
          this.enviaraHtml = dato;
          //  console.log("DATO EN LISTAR", this.enviaraHtml);
        }); */

    this._servicioEstudiante.allestudent2.subscribe(res => {
      this.datos = res;
      console.log("DATOS MUJERES", this.datos);

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
      this._servicioEstudiante._leer3(v);
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this._servicioEstudiante._leer4(v);
    }

  }

}
