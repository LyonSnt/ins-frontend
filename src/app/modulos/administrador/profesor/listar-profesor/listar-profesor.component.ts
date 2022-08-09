import { ProfesorService } from './../../../../servicios/profesor.service';
import { Component, OnInit } from '@angular/core';
import { Profesor } from '@modelos/profesor';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-listar-profesor',
  templateUrl: './listar-profesor.component.html',
  styleUrls: ['./listar-profesor.component.scss'],
  providers: [MessageService]
})
export class ListarProfesorComponent implements OnInit {
  directorio: any = 'http://127.0.0.1:8000/storage/img_profesor/';
  datosProfesor: Profesor[];
  totalRecords: number;

  constructor(
    private _profesorServicio: ProfesorService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {

    this.filtrarProfesor();

  }

  filtrarProfesor() {
    this._profesorServicio.___filtrarProfesor.subscribe(res => {
      this.datosProfesor = res;
    console.log("DATOS HOMBRES", this.datosProfesor);
    });
  }

  eliminarEstudiante(id) {
    this._profesorServicio._eliminarProfesor(id).subscribe((respuesta: any) => {
      this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Correctamente' });
      this.filtrarProfesor();
    });
  }

  nuevoProfesor() {
    //this.ruteador.navigate(['admin/estudiante/agregar']);
    window.location.href = "admin/profesor/agregar";
  }


  buscar(v) {

 this._profesorServicio._filtrarProfesor(v);


  }

}
