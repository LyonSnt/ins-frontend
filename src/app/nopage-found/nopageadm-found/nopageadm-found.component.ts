import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-nopageadm-found',
  templateUrl: './nopageadm-found.component.html',
  styleUrls: ['./nopageadm-found.component.scss']
})
export class NopageadmFoundComponent implements OnInit {

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
    if (this.rol == "Profesor") {
      this.ruteador.navigateByUrl('/prof/dashboard')
    } else {
      this.ruteador.navigateByUrl('/est/dashboard')
    }

  }

}

