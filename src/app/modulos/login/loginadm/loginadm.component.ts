import jwt_decode from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@servicios/login.service';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '@servicios/auth-service.service';

@Component({
  selector: 'app-loginadm',
  templateUrl: './loginadm.component.html',
  styleUrls: ['./loginadm.component.scss']
})
export class LoginadmComponent implements OnInit {

  public form: FormGroup;
  public submited = false;
  data2: any = {};
  payload: any;
  public listar: any;
  tokenTipoAny: any;
  userData: any;
  token: any;

  constructor(
    private _servicioLogin: LoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ruteador: Router,
    private _authservice: AuthServiceService

  ) {


    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      vervisita: ['']

    });

  }



  loginForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm();
    /* this.form.get('vervisita')?.setValue('Administrador'); */
  }


  submit() {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }
    this._servicioLogin.login(this.form.value).subscribe(
      (res) => {
        this.data2 = res;
        //  console.log(this.form.value);
      /*   if (this.data2.status === 1) { */
          this.tokenTipoAny = this.data2.datodeLaravel.TokendeLaravel; //ESTE VIENE DESDE LARAVEL
          localStorage.setItem("TOKENDESDELARAVEL", this.tokenTipoAny);
          const id_rol = this.data2.id_rol;

          console.log("QUIERO SACAR ROL:", id_rol);


          if (id_rol === 1) {
            this.ruteador.navigateByUrl('/admin')
          } if (id_rol === 2) {
            this.ruteador.navigateByUrl('/prof')
          } if (id_rol === 3) {
            this.ruteador.navigateByUrl('/')
          }

          this.toastr.success(JSON.stringify(this.data2.message), JSON.stringify(this.data2.code), {
            timeOut: 2000,
            progressBar: true
          });
        }
       );
  }

}
