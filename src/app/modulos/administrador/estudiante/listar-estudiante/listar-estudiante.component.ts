import { Observable, Subscription } from 'rxjs';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstudianteService } from '@servicios/estudiante.service';
import { LoginService } from '@servicios/login.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.scss'],
  providers: [MessageService]
})
export class ListarEstudianteComponent implements OnInit, AfterViewInit {

  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';
  datos: Estudiante2[];

  //datos: Observable<Estudiante2[]>:
  pageactual: number = 1;

  cumple: Date;
  products: any;
  datos2: Estudiante2[] = [];
  totalRecords: number;
  submitted: boolean;
  constructor
    (
      private _servicioEstudiante: EstudianteService,
      private toastr: ToastrService,
      private _servicioLogin: LoginService,
      private ruteador: Router,
      private messageService: MessageService,

    ) {

   /*  if (this._servicioLogin.IsAdmin() == 'Administrador') {
     this.listarEstudianteH();
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this.listarEstudianteM();
    } */

  }

  ngOnInit(): void {

    this.cumple = new Date();
    this.filtrarEstudiante();
    /* if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this.listarEstudianteH();

     } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
       this.listarEstudianteM();
     } */

  }

  ngAfterViewInit(): void {
   /*  setTimeout(() => {
      this.isLoading = false;
    }, 1000) */

  }
  nuevoEstudiante() {
    //this.ruteador.navigate(['admin/estudiante/agregar']);
    window.location.href = "admin/estudiante/agregar";
  }


  filtrarEstudiante() {
    this._servicioEstudiante.___filtrarEstudiante.subscribe(res => {
      this.datos = res;
    console.log("DATOS HOMBRES", this.datos);
    });
  }
  /* listarEstudianteH() {
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
  } */

  eliminarEstudiante(id) {
    this._servicioEstudiante._eliminarEstudiante(id).subscribe((respuesta: any) => {
      this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Correctamente' });
      this.filtrarEstudiante();
    });
  }


  buscar(v) {

 this._servicioEstudiante._filtrarEstudiante(v);
  /*   if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this._servicioEstudiante._filtrarEstudiante(v);
    } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
      this._servicioEstudiante._estudianteM(v);
    } */

  }

}
