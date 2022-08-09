import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-est',
  templateUrl: './header-est.component.html',
  styleUrls: ['./header-est.component.scss']
})
export class HeaderEstComponent implements OnInit {

  constructor(
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

}
