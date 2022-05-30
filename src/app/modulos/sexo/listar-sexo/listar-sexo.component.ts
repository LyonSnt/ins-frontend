import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SexoService } from '@servicios/sexo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-sexo',
  templateUrl: './listar-sexo.component.html',
  styleUrls: ['./listar-sexo.component.scss']
})
export class ListarSexoComponent implements OnInit {

  enviaraHtml: any;

  constructor
  (
    private _servicioSexo: SexoService,
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
    this._servicioSexo._listar().subscribe((dato: any) => {
      this.enviaraHtml = dato;
    });
  }

  eliminar(id: number) {
    this._servicioSexo._eliminar(id).subscribe((respuesta: any) => {

      this.toastr.error(JSON.stringify('El sexo fue eliminado con éxito'),
        JSON.stringify('Registro Eliminado'), {
        timeOut: 2000,
        progressBar: true
      });
      this.listar();
    });
  }

}
