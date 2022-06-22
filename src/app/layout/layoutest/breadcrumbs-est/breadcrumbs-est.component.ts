import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs-est',
  templateUrl: './breadcrumbs-est.component.html',
  styleUrls: ['./breadcrumbs-est.component.scss']
})
export class BreadcrumbsEstComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;
  constructor(
    private ruteador: Router
  ) {
    this.tituloSubs$ = this.getArgumentos().subscribe(({titulo}) => {
      this.titulo = titulo;
      document.title = `Instituto - ${titulo}`;
    })
  }


  ngOnDestroy(): void {
   this.tituloSubs$.unsubscribe();
  }

  getArgumentos() {
    return this.ruteador.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)
    );
  }

}
