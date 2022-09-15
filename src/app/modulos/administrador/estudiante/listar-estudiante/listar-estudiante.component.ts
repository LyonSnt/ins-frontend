import { Observable, Subscription } from 'rxjs';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante2 } from '@modelos/estudiante2.model';
import { EstudianteService } from '@servicios/estudiante.service';
import { LoginService } from '@servicios/login.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
//import * as FileSaver from 'file-saver';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.scss'],
  providers: [MessageService]

})
export class ListarEstudianteComponent implements OnInit, AfterViewInit {

  directorio: any = 'http://127.0.0.1:8000/storage/img_estudiante/';
  datos: Estudiante2[];
  public hideNext = false;
  loading: boolean = true;

  //datos: Observable<Estudiante2[]>:
  pageactual: number = 1;

  cumple: Date;
  products: any;
  datos2: Estudiante2[] = [];
  totalRecords: number;
  submitted: boolean;
  first = 0;
  rows = 3;

  rowAny: any;
  //public doc = new jsPDF();




  //custom data
  sales2 = [
    { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
    { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
    { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
    { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
    { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
    { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
    { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
    { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
    { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
    { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
  ];
  columns2 = [
    { title: "Brands", dataKey: "brand" },
    { title: "Last Year Sale", dataKey: "lastYearSale" },
    { title: "This Year Sale", dataKey: "thisYearSale" },
    { title: "Last Year Profit", dataKey: "lastYearProfit" },
    { title: "This Year Profit", dataKey: "thisYearProfit" }
  ];
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
    /*  this.filtrarEstudiante(); */
    /* if (this._servicioLogin.IsAdmin() == 'Administrador') {
      this.listarEstudianteH();

     } if (this._servicioLogin.IsAdmin() == 'Administrador2') {
       this.listarEstudianteM();
     } */

    this._servicioEstudiante.___filtrarEstudiante.subscribe(res => {
      this.datos = res;
      console.log("DATOS HOMBRES", this.datos);
    });
    this._servicioEstudiante._listar().subscribe(res => {
      this.rowAny = res;
      console.log("DATOS HIS", this.rowAny);
    });



  }

  //pdf button functionality
  exportPdf() {

    this._servicioEstudiante._listar().subscribe(res => {
      this.rowAny = res;
      const doc = new jsPDF('p', 'pt');

      autoTable(doc, {
        columns: this.columns2,
        body: this.rowAny,
        didDrawPage: (dataArg) => {
          doc.text('Sales', dataArg.settings.margin.left, 10);
        }
      });
      doc.save('sales.pdf');

    });
  }


  /* imprimir() {
    this.doc.text("Hello world!", 10, 10);
    this.doc.save("listaEstu.pdf");
  } */

  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.datos ? this.first === (this.datos.length - this.rows) : true;
  }
  isFirstPage(): boolean {
    return this.datos ? this.first === 0 : true;
  }



  ngAfterViewInit(): void {
    /*  setTimeout(() => {
       this.isLoading = false;
     }, 1000) */

  }
  nuevoEstudiante() {
    //this.ruteador.navigate(['admin/estudiante/agregar']);
    window.location.href = "admin/estu/agregar";
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
