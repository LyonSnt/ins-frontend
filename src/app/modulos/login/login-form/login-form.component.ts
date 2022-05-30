import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@servicios/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public loginSubmitted = false;

  constructor(
    private formularioBuilder: FormBuilder,
    private _servicioLogin: LoginService
  ) {
    this.loginForm = this.formularioBuilder.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      contrasena: ['', [Validators.required, Validators.maxLength(8)]]
    });
  }
  ngOnInit(): void {
   this.loginForm.get('correo')?.setValue('lyon@gmail.com'); // esto es para que aparesca de una en el campo
  }


  get fm() {
    return this.loginForm.controls;
  }


  autentificacion() {
    this.loginSubmitted = true;
    if(!this.loginForm.valid){
      return;
    }
    console.log('Autentificado', this.loginForm.value);
    this._servicioLogin.login(this.loginForm.value).subscribe( r => {
      console.log(r);
    });
  }
}


