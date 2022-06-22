import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-nopageest-found',
  templateUrl: './nopageest-found.component.html',
  styleUrls: ['./nopageest-found.component.scss']
})
export class NopageestFoundComponent implements OnInit {
  token: any;
  userData: any;

  rol: any;
  constructor(
    private ruteador: Router
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);  //ESTA PARTE TRAE LA FOTO GRANDE

    this.rol = this.userData.id_rol
    console.log("rol nuevo: ", this.rol);

  }

  cancel() {
    if (this.rol == "Administrador") {
      this.ruteador.navigateByUrl('/admin/dashboard')
    } else {
      this.ruteador.navigateByUrl('/prof/dashboard')
    }

  }

}
