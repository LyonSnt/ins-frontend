import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from '@servicios/estudiante.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.scss']
})
export class ListarEstudianteComponent implements OnInit {

  enviaraHtml: any;

  directorio: any = 'http://127.0.0.1:8000/storage/hoy10/';

  constructor
  (
    private _servicioEstudiante: EstudianteService,
      private toastr: ToastrService,
      private ruteador: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const routParams = this.ruteador.snapshot.paramMap;
    this.enviaraHtml = Number(routParams.get('id'));
    console.log(this.enviaraHtml);

    this.listar();
  }


  listar() {
    this._servicioEstudiante._listar().subscribe((dato: any) => {
      this.enviaraHtml = dato;
    });
  }

  eliminar(id: number) {
    this._servicioEstudiante._eliminar(id).subscribe((respuesta: any) => {

      this.toastr.error(JSON.stringify('El sexo fue eliminado con éxito'),
        JSON.stringify('Registro Eliminado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.listar();
    });
  }

}
