import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs-adm1',
  templateUrl: './breadcrumbs-adm1.component.html',
  styleUrls: ['./breadcrumbs-adm1.component.scss']
})
export class BreadcrumbsAdm1Component implements OnDestroy {

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
