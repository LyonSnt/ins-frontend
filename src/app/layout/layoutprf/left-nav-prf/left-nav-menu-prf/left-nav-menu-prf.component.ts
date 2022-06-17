import { Component, Input, OnInit } from '@angular/core';
import { ILeftNavMenu } from '@modelos/ileft-nav-menu.metadata';

@Component({
  selector: 'app-left-nav-menu-prf',
  templateUrl: './left-nav-menu-prf.component.html',
  styleUrls: ['./left-nav-menu-prf.component.scss']
})
export class LeftNavMenuPrfComponent implements OnInit {

  @Input() datodelMenu: ILeftNavMenu;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
