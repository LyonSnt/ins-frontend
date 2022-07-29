import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIglesia } from '@modelos/iiglesia';
import { IglesiaService } from '@servicios/iglesia.service';

@Component({
  selector: 'app-vista-iglesia',
  templateUrl: './vista-iglesia.component.html',
  styleUrls: ['./vista-iglesia.component.scss']
})
export class VistaIglesiaComponent implements OnInit {

  public iglesiaId: string | null = null;
  listaIglesia: IIglesia = {} as IIglesia;


  constructor(
    private activarRuta: ActivatedRoute,
    private _iglesiaServicio: IglesiaService
  ) { }

  ngOnInit(): void {
    this.activarRuta.paramMap.subscribe(parametro => {
      this.iglesiaId = parametro.get('id');
      console.log("IGLESIA:", this.iglesiaId);
    });

    if (this.iglesiaId) {
      this._iglesiaServicio._buscarIglesiaPorId(this.iglesiaId).subscribe((dato: IIglesia) => {
        this.listaIglesia = dato.datol; //AQUI EN DATOS PONEMOS LA VARIABLE DATO QUE VIENE DESDE LARAVEL POR QUE EES UN ARRAY DE OBJETOS
        console.log("DATO:", this.listaIglesia);
      });
    }

  }

  public enviarHTML() {
    return Object.keys(this.listaIglesia).length > 0;
  }

}
