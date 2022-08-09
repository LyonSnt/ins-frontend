import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '@servicios/login.service';

@Component({
  selector: 'app-header-prf',
  templateUrl: './header-prf.component.html',
  styleUrls: ['./header-prf.component.scss']
})
export class HeaderPrfComponent implements OnInit {

  constructor(
    private _servicioLogin: LoginService,
    private ruteador: Router,
    public _traductorServicio: TranslateService
    ) {
      _traductorServicio.addLangs(['es', 'ki']);
      _traductorServicio.setDefaultLang('es');
     }

  ngOnInit(): void {
  }
  traductor(idioma: string) {
    this._traductorServicio.use(idioma);
  }

  logout() {
    this._servicioLogin.remove();
  }


}
