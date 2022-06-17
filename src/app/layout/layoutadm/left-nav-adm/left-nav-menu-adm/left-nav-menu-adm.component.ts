import { Component, Input, OnInit } from '@angular/core';
import { ILeftNavMenu } from '@modelos/ileft-nav-menu.metadata';

@Component({
  selector: 'app-left-nav-menu-adm',
  templateUrl: './left-nav-menu-adm.component.html',
  styleUrls: ['./left-nav-menu-adm.component.scss']
})
export class LeftNavMenuAdmComponent implements OnInit {

/*   @Input() datodelMenu: ILeftNavMenu; */

@Input() datodelMenu: ILeftNavMenu;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}

