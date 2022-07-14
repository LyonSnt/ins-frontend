import { InstitucionService } from './institucion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMatricula } from '@modelos/imatricula';
import { Matricula } from '@modelos/matricula.model';
import { environment } from 'environments/environment.prod';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { EstudianteService } from './estudiante.service';




@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private urlLaravel = environment.baseLaravel;
  directorio: any = 'assets/images';
  modeloMatricula = new BehaviorSubject<Matricula[]>(null!);
  modeloMatricula2 = new BehaviorSubject<Matricula[]>(null!);
  modeloMatriculaH = new BehaviorSubject<Matricula[]>(null!);
  modeloMatriculaM = new BehaviorSubject<Matricula[]>(null!);
  parametre: any = {};
  list: any = [];

  anioActual: number;
  tiempoTranscurrido: number;
  hoy: Date;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient,
    private _estudianteServ: EstudianteService,
    private _institucionServicio: InstitucionService,


  ) {


    this.anioActual = new Date().getFullYear();

   // console.log("AÑO ACTUAL2", this.anioActual);

/*     this.tiempoTranscurrido = Date.now(); */
  /*   console.log("AÑO ACTUAL4", this.tiempoTranscurrido);
     this.hoy = new Date(this.tempoTranscurrido);
 */


    this._buscarmatriculaH("");
    this._buscarmatriculaM("");
    this.obtenerDatosMatricula();
  }

  _createMatricula(matricula): Observable<IMatricula> {
    return this.http.post<IMatricula>(this.urlLaravel + "matricula", JSON.stringify(matricula), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _createMatricula2(rv2: IMatricula): Observable<IMatricula> {
    return this.http.post<IMatricula>(this.urlLaravel + "matricula", rv2)
  }
  _listarMatriculaH(): Observable<IMatricula[]> {
    return this.http.get<IMatricula[]>(this.urlLaravel + "matricula")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarMatriculaPorId(id): Observable<IMatricula> {
    return this.http.get<IMatricula>(this.urlLaravel + "matricula" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarmatricula(query) {
    return this.http.post(this.urlLaravel + "buscarmatricula?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatricula2.next(r.data);
    });
  }

  _buscarmatricula2() {
    return this.http.get(this.urlLaravel + "buscarmatricula2");
  }
  _imprimirmatricula2() {
    return this.http.get(this.urlLaravel + "imprimirmatricula");
  }

  _imprimirmatricula(): Observable<IMatricula[]> {
    return this.http.get<IMatricula[]>(this.urlLaravel + "imprimirmatricula")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarmatriculaH(query) {
    return this.http.post(this.urlLaravel + "buscarmatriculaH?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatriculaH.next(r.data);
    });
  }
  _buscarmatriculaM(query) {
    return this.http.post(this.urlLaravel + "buscarmatriculaM?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatriculaM.next(r.data);
    });
  }

  selectId(id: number) {
    this.
      _institucionServicio._buscarInstitucionPorId(id).subscribe(res => {
        this.parametre = res;
        //  console.log("PARAMETRO:", this.parametre);

      })
  }



  obtenerDatosMatricula() {

    this.selectId(1); //ESTO ES PARA PONER DATOS EN LA PARTE SUPERIOR
    this._imprimirmatricula().subscribe(resp => { //ESTO ES PARA LLAMAR LOS DATOS PARA GENERAR EL PDF
      this.list = resp;
      //console.log("LISTA MATRI:", this.list);

    });


    return {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      content: [
        /* ESTO ES LETRAS SUPERIORES */
        {
          columns: [
            [
              {
                text: this.parametre.ins_nombre,
                style: 'name',
              },
              {
                text: this.parametre.ins_correo,
                style: 'line',
              },
              {
                text: this.parametre.ins_direccion,
                style: 'line',
              },
              {
                text: this.parametre.ins_telefono,
                style: 'line',

              },
              {
                text: this.anioActual,
                style: 'line',

              },
            /*   {
                image: 'assets/images/1.jpg', width: 90

              }, */
              {
                text: '______________________________________________________________________________________',
                alignment: 'center',
                margin: [0, 0, 0, -12]
              },
              {
                text: '______________________________________________________________________________________',
                alignment: 'center',
                margin: [0, 0, 0, 10]
              },
            ],
          ]
        },
      /*   {
          image: 'assets/images/1.jpg', width: 90

        }, */

        /*  ESTA ES LA CABECERA*/
        /*      {
               text: 'Lista de estudiante',
               bold: true,
               fontSize: 20,
               alignment: 'center',
               margin: [0, 0, 0, 20]
             }, */

        /* ESTO ES LO QUE VISUALIZA LA TABLA */
        this.getList(this.list),
        {

        },
        this.getList2(),
        {

        },

        /* ESTO ES PARA LAS LETRAS INFERIORES */
        {
          text: 'Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse,... 2 Timoteo 2:15.',
          style: 'footer',
          alignment: 'center'
        },


      ],
      /* ESTO ES PARA DAR ESTILO A LAS LETRAS INFERIORES */
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },

        name: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
        },

        line: {
          fontSize: 11,
          //  bold: true,
          italics: true,
        alignment: 'center',
        },

        footer: {
          fontSize: 10,
          margin: [0, 10, 0, -10],
          alignment: 'right',
          italics: true
        },

        tableHeader: {
          fontSize: 14,
          bold: true,
          alignment: 'center'
        }
      }
    };
  }
  /* ESTO ESTA PARA VISUALIZAR EN LA TABLA */
  getList(items: Matricula[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [
            {
              text: 'Nivel',
              style: 'tableHeader'
            },
            {
              text: 'Nombre',
              style: 'tableHeader'
            },
            {
              text: 'Materia',
              style: 'tableHeader'
            },
            {
              text: 'Trimestre',
              style: 'tableHeader'
            },
          ],
          ...items.map(ed => {
            return [
              ed.niv_descripcion,
              ed.nombre + ' ' + ed.ape,
              ed.asg_nombre,
              ed.tri_descripcion
            ];
          })
        ]
      }
    };

  }

  getList2() {
    return {
      /*     table: {
            headerRows: 1,
            widths: [ 'auto', 'auto', '*'],

            body: [
              [ '', '', ''],// CABECEZA
              [ { text: 'Valor a Pagar:', bold: true, italics: true }, '', '' ],
              [ { text: 'Abonado:', bold: true, italics: true }, '', '', ],
              [ { text: 'Saldo:', bold: true, italics: true }, '', '' ]
            ]
          } */

      table: {
        widths: ['auto', '*', '*', '*'],
        //	headerRows: 2,
        // keepWithHeaderRows: 1,
        body: [
          [{ text: '', colSpan: 4 }, {}, {}, {}],
          //[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}, {text: 'Header 4', style: 'tableHeader', alignment: 'center'}],

          [{ text: 'Valor a Pagar:', bold: true, italics: true }, { text: '', colSpan: 3 }, '', ''],
          [{ text: 'Abonado:', bold: true, italics: true }, { text: '', colSpan: 3 }, '', ''],
          [{ text: 'Saldo:', bold: true, italics: true }, { text: '', colSpan: 3 }, '', ''],

          // [{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3', 'Sample value 3'],

        ]
      }

    };

  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

  /* async createPdf() {
    var docDefinition = {
      content: [

        {
          image: await this.getBase64ImageFromURL(
            "../../assets/ribbonLogo1.png"
          )
        }   */


}
