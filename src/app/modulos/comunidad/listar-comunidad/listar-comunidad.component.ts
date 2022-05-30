import { IComunidad } from './../../../modelos/icomunidad';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComunidadService } from '@servicios/comunidad.service';

@Component({
  selector: 'app-listar-comunidad',
  templateUrl: './listar-comunidad.component.html',
  styleUrls: ['./listar-comunidad.component.scss']
})
export class ListarComunidadComponent implements OnInit {

  //listarch: IComunidad[] = [];

  listar: any;

  list: IComunidad[];
  constructor(private _servicioComunidad: ComunidadService) { }

  ngOnInit(): void {
 this.listarComunidad();
}
  listarComunidad() {
    this._servicioComunidad._listarComunidad().subscribe((dato: IComunidad[]) => {
      this.listar = dato;
      /* console.log(this.listarch); */
    });
  }

  eliminar(id: number) {
    this._servicioComunidad._eliminar(id).subscribe((respuesta: any) => {
      window.location.reload();
    },
      (error: any) => {
        alert(error.message);
      }
    );
  }

}
