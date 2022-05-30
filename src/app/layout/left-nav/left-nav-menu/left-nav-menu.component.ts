import { Component, Input, OnInit } from '@angular/core';
import { ILeftNavMenu } from '@modelos/ileft-nav-menu.metadata';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.scss']
})
export class LeftNavMenuComponent implements OnInit {
  @Input() dato: ILeftNavMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
