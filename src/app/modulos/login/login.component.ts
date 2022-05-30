import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submited = false;
  data2: any;
  public listar: any;
  token: any;

  constructor(
    private _servicioLogin: LoginService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ruteador: Router

  ) {

  }

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }
    this._servicioLogin.login(this.form.value).subscribe(resp => {
      this.data2 = resp;
    //  console.log(this.form.value);
      if (this.data2.status === 1) {
       // console.log(this.data2);
        this.token = this.data2.data.token;
        localStorage.setItem('token', this.token);
        this.ruteador.navigateByUrl('panel')
        this.toastr.success(JSON.stringify(this.data2.message), JSON.stringify(this.data2.code), {
          timeOut: 2000,
          progressBar: true
        });
      } else if (this.data2.status === 0) {
        this.toastr.success(JSON.stringify(this.data2.message), JSON.stringify(this.data2.code), {
          timeOut: 2000,
          progressBar: true
        });
      }

    });
  }
}
