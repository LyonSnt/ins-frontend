import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '@servicios/login.service';

@Component({
  selector: 'app-header-adm',
  templateUrl: './header-adm.component.html',
  styleUrls: ['./header-adm.component.scss']
})
export class HeaderAdmComponent implements OnInit {
  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public faBell = faBell;
  public faComment = faComment;
  public avatar = 'assets/images/defaults/avatar5.png'
  public logo = 'assets/images/defaults/lo2.png'

  constructor(private _servicioLogin: LoginService,
    private ruteador: Router) { }

  ngOnInit(): void {
  }

}
