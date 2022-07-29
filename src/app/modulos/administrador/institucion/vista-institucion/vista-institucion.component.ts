import { IInstitucion } from '@modelos/iinstitucion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitucionService } from '@servicios/institucion.service';

@Component({
  selector: 'app-vista-institucion',
  templateUrl: './vista-institucion.component.html',
  styleUrls: ['./vista-institucion.component.scss']
})
export class VistaInstitucionComponent implements OnInit {

  public institucionId: string | null = null;
  listaInstitucion: IInstitucion = {} as IInstitucion;


  constructor(
    private activarRuta: ActivatedRoute,
    private _institucionServicio: InstitucionService
  ) { }

  ngOnInit(): void {
    this.activarRuta.paramMap.subscribe(parametro => {
      this.institucionId = parametro.get('id');
      console.log("INSTITUION:", this.institucionId);
    });

    if (this.institucionId) {
      this._institucionServicio._buscarInstitucionPorId(this.institucionId).subscribe((dato: IInstitucion) => {
        this.listaInstitucion = dato;
      });
    }

  }

  public enviarHTML() {
    return Object.keys(this.listaInstitucion).length > 0;
  }

}
