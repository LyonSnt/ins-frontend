import { Estudiante2 } from '@modelos/estudiante2.model';
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
  modeloMatriculaHn = new BehaviorSubject<Matricula[]>(null!);
  modeloMatriculaId = new BehaviorSubject<Matricula[]>(null!);

  ___filtrarParaMatricular = new BehaviorSubject<Matricula[]>(null!);
  ____filtrarEstudianteParaMatricular = new BehaviorSubject<Estudiante2[]>(null!);

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

    /*  this._buscarmatriculaH("");
     this._buscarmatriculaM("");
     this._buscarmatriculaHn("");

     this._matriculaId();
      */
    //this._leer4();
    this.obtenerDatosMatricula(); //ESTO ESTA DANDO ERROR AL CARGAR
    this._filtrarParaMatricular("");
    this._filtrarEstudianteParaMatricular("");

  }

  _listarMatriculaLegalizar(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "listarMatriculaLegalizar")
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _listarMatriculaLegalizado(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "listarMatriculaLegalizado")
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _filtrarParaMatricular(query) {
    return this.http.post(this.urlLaravel + "filtrarParaMatricular?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.___filtrarParaMatricular.next(r.data);
    });
  }

  _filtrarEstudianteParaMatricular(query) {
    return this.http.post(this.urlLaravel + "filtrarEstudianteParaMatricular?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.____filtrarEstudianteParaMatricular.next(r.datol);
    });
  }




  _anularMatricula(id, estudiante: Estudiante2): Observable<Estudiante2> {
    return this.http.put<Estudiante2>(this.urlLaravel + "anularMatricula" + '/' + id, JSON.stringify(estudiante), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  _listarMatriculaLegalizadoId(id): Observable<Matricula> {
    return this.http.get<Matricula>(this.urlLaravel + "listarMatriculaLegalizadoId" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _matriculados(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "matriculados")
      .pipe(
        catchError(this.errorHandler)
      )
  }
  _matriculasAnuladas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "matriculasAnuladas")
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _listarParaMatricular(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "listarParaMatricular")
      .pipe(
        catchError(this.errorHandler)
      )
  }


  _buscarMatriculaEstudiantePorId(id): Observable<Matricula> {
    return this.http.get<Matricula>(this.urlLaravel + "buscarMatriculaEstudiantePorId" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  _legalizarMatricula(id, matricula: Matricula): Observable<Matricula> {
    return this.http.put<Matricula>(this.urlLaravel + "legalizarMatricula" + '/' + id, JSON.stringify(matricula), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  _legalizarMatricula2(id, matricula: Matricula): Observable<Matricula> {
    return this.http.put<Matricula>(this.urlLaravel + "legalizarMatricula2" + '/' + id, JSON.stringify(matricula), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  _buscarMatriculaPorId(id): Observable<Matricula> {
    return this.http.get<Matricula>(this.urlLaravel + "buscarMatriculaPorId" + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /* no seeee */
  _AnularMatricula1(id) {
    return this.http.delete<Matricula>(this.urlLaravel + "eliminarEstudiante" + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }



  _createMatricula(matricula): Observable<Matricula> {
    return this.http.post<Matricula>(this.urlLaravel + "crearMatricula", JSON.stringify(matricula), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  _createMatriculaEsu(matricula): Observable<Matricula> {
    return this.http.post<Matricula>(this.urlLaravel + "crearMatricula", JSON.stringify(matricula), this.httpOptions)
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

  _leer4() {
    return this.http.get(this.urlLaravel + "ultimoDatoMatricula").subscribe(res => {
      var r: any = res;
      this.modeloMatriculaId.next(r.datoDesdeLaravel);

      //  console.log("In services:", this.modeloMatriculaId.value);

    });
  }

  _matriculaId(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "ultimodato")
      .pipe(
        catchError(this.errorHandler)
      )
  }

  _buscarMatriculaPorId2(id): Observable<Matricula> {
    return this.http.get<Matricula>(this.urlLaravel + "matricula23" + '/' + id)
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

  _imprimirmatricula(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.urlLaravel + "imprimirmatricula")
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
  _buscarmatriculaHn(query) {
    return this.http.post(this.urlLaravel + "buscarmatriculaHn?buscar=" + query, null).subscribe(res => {
      var r: any = res;
      this.modeloMatriculaHn.next(r.data);
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
                absolutePosition: { x: 65, y: 40 },
                text: this.parametre.ins_nombre,
                style: 'titulo1',
              },
              /*     {
                    text: this.parametre.ins_correo,
                    style: 'line',
                  }, */
              {
                absolutePosition: { x: 188, y: 58 },
                text: this.parametre.ins_direccion,
                style: 'titulo2',
              },
              {
                absolutePosition: { x: 212, y: 71 },
                text: this.parametre.ins_telefono,
                style: 'titulo2',

              },
              {
                absolutePosition: { x: 218, y: 84 },
                text: this.anioActual,
                style: 'titulo2',

              },
              /*   {
                  image: 'assets/images/1.jpg', width: 90

                }, */
              {
                absolutePosition: { x: 40, y: 100 },
                text: '____________________________________________________________________________',
                alignment: 'left',
                margin: [0, 0, 0, -12]
              },
              {
                absolutePosition: { x: 40, y: 97 },
                text: '____________________________________________________________________________',
                alignment: 'left',
                margin: [0, 0, 0, 10]
              },
            ],
          ]
        },


        {
          absolutePosition: { x: 450, y: 40 },
          columns: [
            [
              {
                text: this.parametre.ins_nombre,
                style: 'titulo3'
              },
              /*     {
                    text: this.parametre.ins_correo,
                    style: 'line',
                  }, */
              {
                text: this.parametre.ins_direccion,
                style: 'titulo4'
              },
              {
                text: this.parametre.ins_telefono,
                style: 'titulo4'

              },
              {
                text: this.anioActual,
                style: 'titulo4'

              },
              /*   {
                  image: 'assets/images/1.jpg', width: 90

                }, */
              {
                absolutePosition: { x: 40, y: 100 },
                text: '____________________________________________________________________________',
                alignment: 'right',
                margin: [0, 0, 0, -12]
              },
              {
                absolutePosition: { x: 40, y: 97 },
                text: '____________________________________________________________________________',
                alignment: 'right',
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
        this.getList3(this.list),
        {

        },
        this.getList4(),
        {

        },

        /* ESTO ES PARA LAS LETRAS INFERIORES */
      /*   {
          absolutePosition: { x: 40, y: 400 },
          text: 'Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse,... 2 Timoteo 2:15.',
          style: 'footer',
          alignment: 'left'
        }, */


      ],
      /* ESTO ES PARA DAR ESTILO A LAS LETRAS INFERIORES */
      styles: {
        header: {
          fontSize: 36,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },

        name: { /* EN EL TITULO 1 */
          fontSize: 16,
          bold: true,
          alignment: 'center',
        },
        line: { /* ES DEL TITULO 2 */
          fontSize: 11,
          //  bold: true,
          italics: true,
          alignment: 'center',
        },
        titulo1: { /* EN EL TITULO 1 */
          fontSize: 16,
          bold: true,
          //alignment: 'center',
        },
        titulo2: { /* ES DEL TITULO 2 */
          fontSize: 11,
          //  bold: true,
          italics: true,
         // alignment: 'center',
        },
        titulo3: { /* EN EL TITULO 1 */
          fontSize: 16,
          bold: true,
          alignment: 'center',
        },
        titulo4: { /* ES DEL TITULO 2 */
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

        tableHeader: { /* ES EL TH */
          fontSize: 16,
          bold: true,
          alignment: 'center'
        },

        alturaTextoTabla1: {
          fontSize: 14
        },
        alturaTextoTabla2: {
          fontSize: 20,
          bold: true,
          italics: true,
        }
      }
    };
  }
  /* ESTO ESTA PARA VISUALIZAR EN LA TABLA */
  getList(items: Matricula[]) {
    return {
      absolutePosition: { x: 30, y: 120 },
      style: 'alturaTextoTabla1',
      table: {
        //  widths: ['*', '*', '*', '*'],
        widths: ['7%', '17%', '17%', '7%'],
      //  widths: ['25%', '40%', '25%', '25%'],
        heights: [30, 40],

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
              text: 'Trim',
              style: 'tableHeader'
            },
          ],

          ...items.map(ed => {

            return [ed.idniv, ed.nombre + ' ' + ed.ape, ed.asg_nombre, ed.idtri];
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
      absolutePosition: { x: 30, y: 210 },
      table: {
        // widths: ['auto', '*', '*', '*'],
        widths: ['18%', '12%', '11%', '7%'],
        heights: [5, 30, 30, 30],
        //	headerRows: 2,
        // keepWithHeaderRows: 1,
        body: [
          [{ text: '', colSpan: 4 }, {}, {}, {},],
          //[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}, {text: 'Header 4', style: 'tableHeader', alignment: 'center'}],

          [{ text: 'Valor a Pagar:', style: 'alturaTextoTabla2' }, { text: '', colSpan: 3 }, '', '',],
          [{ text: 'Abonado:', style: 'alturaTextoTabla2' }, { text: '', colSpan: 3 }, '', ''],
          [{ text: 'Saldo:', style: 'alturaTextoTabla2' }, { text: '', colSpan: 3 }, '', ''],

          // [{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3', 'Sample value 3'],

        ]
      }
    };

  }

  getList3(items: Matricula[]) {
    return {
      absolutePosition: { x: 435, y: 120 },
      style: 'alturaTextoTabla1',
      table: {
         // widths: ['auto', '*', '*', '*'],
       widths: ['15%', '38%', '38%', '15%'],
        heights: [30, 40],

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
              text: 'Trim',
              style: 'tableHeader'
            },
          ],

          ...items.map(ed => {

            return [ed.idniv, ed.nombre + ' ' + ed.ape, ed.asg_nombre, ed.idtri];
          })
        ]
      }
    };

  }

  getList4() {
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
      absolutePosition: { x: 435, y: 210 },
      table: {
        // widths: ['auto', '*', '*', '*'],
        widths: ['40%', '25%', '20%', '21%'],
        heights: [5, 30, 30, 30],
        //	headerRows: 2,
        // keepWithHeaderRows: 1,
        body: [
          [{ text: '', colSpan: 4 }, {}, {}, {},],
          //[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}, {text: 'Header 4', style: 'tableHeader', alignment: 'center'}],

          [{ text: 'Valor a Pagar:', style: 'alturaTextoTabla2' }, { text: '', colSpan: 3 }, '', '',],
          [{ text: 'Abonado:', style: 'alturaTextoTabla2' }, { text: '', colSpan: 3 }, '', ''],
          [{ text: 'Saldo:', style: 'alturaTextoTabla2' }, { text: '', colSpan: 3 }, '', ''],

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
