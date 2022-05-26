import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '@servicios/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
