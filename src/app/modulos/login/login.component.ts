import jwt_decode from 'jwt-decode';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@servicios/login.service';

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
  token: any;

  constructor(
    private _servicioLogin: LoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ruteador: Router,
    private route: ActivatedRoute

  ) {

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.form = this.fb.group({
      email: ['a@a.com', [Validators.required, Validators.email]],
      password: ['a', [Validators.required, Validators.minLength(1)]]

    });
  }


  login() {
 /*    this.submited = true;
    if (this.form.invalid) {
      return;
    } */
    this._servicioLogin._login(this.form.value).subscribe(
      (resp) => {
        this.data2 = resp;
        if (this.data2.status == 1) {
         //  console.log("TODOS LOS DATOS", this.data2);

          this.token = this.data2.data.token;
          localStorage.setItem('token', this.token);
        //  console.log("TOKEN", this.token);
          const decoded = jwt_decode(this.token);
        //  console.log("JWT", decoded);
          const id_rol = this.data2.id_rol;
          localStorage.setItem('id_rol', id_rol);
        //  console.log("QUIERO SACAR ROL:", id_rol);
          if (id_rol == 'Administrador' || id_rol == 'Administrador2') {

           // this.ruteador.navigate(['/admin/dashboard'], {relativeTo: this.route});
            window.location.href="/admin/dashboard";


            //this.router.navigate(['edit'], {relativeTo: this.route});

          } if (id_rol == 'Profesor') {
            this.ruteador.navigateByUrl('/prof/dashboard')
          } if (id_rol == 'Estudiante') {
            this.ruteador.navigateByUrl('/est/dashboard')
          }
          this.toastr.info(JSON.stringify(this.data2.msg2), JSON.stringify(this.data2.msg1), {
            timeOut: 3000,
            progressBar: true
          });
        } else if (this.data2.status == 0) {
          this.toastr.error(JSON.stringify(this.data2.msg), JSON.stringify(this.data2.error), {
            timeOut: 3000,
            progressBar: true
          });
        }

      });
  }

  validarCampo(field: string): string {
    const validarCampo = this.form.get(field);
    return (!validarCampo?.valid && validarCampo?.touched)
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }
}
