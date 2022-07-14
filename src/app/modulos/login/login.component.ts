import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@servicios/login.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {

  public loader = 'assets/images/loader/loader1.gif'
  public isLoading = true;
  public form: FormGroup;
  public submited = false;
  data2: any;
  public listar: any;
  token: any;
  user: any = {};
  tokenTipoAny: any;

  constructor(
    private _servicioLogin: LoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ruteador: Router,

  ) {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  ngOnInit(): void {
    this.loginForm();


    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });


  }

  loginForm() {
    this.form = this.fb.group({
      email: ['a@a.com', [Validators.required, Validators.email]],
      password: ['a', [Validators.required, Validators.minLength(1)]]

    });
  }


  submit() {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }
    this._servicioLogin.login(this.form.value).subscribe(
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


          console.log("QUIERO SACAR ROL:", id_rol);


          if (id_rol == 'Administrador' || id_rol == 'Administrador2') {
            this.ruteador.navigateByUrl('/admin/dashboard')
          } if (id_rol == 'Profesor') {
            this.ruteador.navigateByUrl('/prof/dashboard')
          } if (id_rol == 'Estudiante') {
            this.ruteador.navigateByUrl('/est/dashboard')
          }

          this.toastr.success(JSON.stringify(this.data2.msg), JSON.stringify(this.data2.code), {
            timeOut: 2000,
            progressBar: true
          });
        } else if (this.data2.status == 0) {
          this.toastr.error(JSON.stringify(this.data2.msg), JSON.stringify(this.data2.code), {
            timeOut: 2000,
            progressBar: true
          });
        }

      });
  }

  isvaldaFiled(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }


  autentificacion() {
    this._servicioLogin.login(this.form.value).subscribe(r => {
      this.data2 = r;

      this.token = this.data2.token;
      localStorage.setItem('token', this.token);
      console.log("TOKEN", this.token);

      this.user = this.data2.data;

      localStorage.setItem('user', this.user.est_id);
      console.log("USUARIO EN LOGIN", this.user);


      /*   const decoded = jwt_decode(atob(this.user));

        console.log("JWT", decoded); */

      const id_rol = this.user.id_rol;
      localStorage.setItem('id_rol', id_rol);
      console.log("ROL EN LOGIN:", id_rol);

      if (id_rol == 'Administrador') {
        this.ruteador.navigateByUrl('/admin/dashboard')
      } if (id_rol == 'Profesor') {
        this.ruteador.navigateByUrl('/prof/dashboard')
      } if (id_rol == 'Estudiante') {
        this.ruteador.navigateByUrl('/est/dashboard')
      }
    });
  }
}
