import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@servicios/login.service';
import { AuthServiceService } from '@servicios/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginSubmitted = false;
  data2: any;
  public listar: any;
  token: any;
  tokenTipoAny: any;

  constructor(
    private _servicioLogin: LoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ruteador: Router,
    private _authservice: AuthServiceService

  ) {

    this.loginForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      password: ['', [Validators.required, Validators.maxLength(8)]]

    });

  }

  ngOnInit(): void {


  }

  get fm() {
    return this.loginForm.controls;
  }

 /*  loginForm() {
     this.form = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      password: ['', [Validators.required, Validators.maxLength(8)]]

    });
  } */




  submit() {
    this.loginSubmitted = true;
    if(!this.loginForm.valid){
      return;
    }
    this._servicioLogin.login(this.loginForm.value).subscribe(
      (resp) => {
        this.data2 = resp;
        if (this.data2.status == 1) {
          // console.log("TODOS LOS DATOS", this.data2);
          this.token = this.data2.data.token;
          localStorage.setItem('token', this.token);

          //   console.log("TOKEN", this.token);

          const decoded = jwt_decode(this.token);

          console.log("JWT", decoded);



          //  var base64Url = this.token.split('.')[1];
          //var base64 = base64Url.replace('-', '+').replace('_', '/');
          //console.log("QUE SERAA", JSON.parse(window.atob(base64)));


          const id_rol = this.data2.id_rol;

          localStorage.setItem('id_rol', id_rol);


          //console.log("QUIERO SACAR ROL:", id_rol);


          if (id_rol == 1) {
            this.ruteador.navigateByUrl('/admin')
          } if (id_rol == 2) {
            this.ruteador.navigateByUrl('/prof')
          } if (id_rol == 3) {
            this.ruteador.navigateByUrl('/')
          }

          this.toastr.success(JSON.stringify(this.data2.message), JSON.stringify(this.data2.code), {
            timeOut: 2000,
            progressBar: true
          });
        } else if (this.data2.status == 0) {
          this.toastr.error(JSON.stringify(this.data2.message), JSON.stringify(this.data2.code), {
            timeOut: 2000,
            progressBar: true
          });
        }

      });
  }

  autentificacion() {
    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    console.log('Autentificado', this.loginForm.value);

    this._authservice.login(this.loginForm.value).subscribe(r => {
      console.log(r);
    });
  }
}
