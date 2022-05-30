import jwt_decode  from 'jwt-decode';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  public showLeftNav = true;
  public $theme: 'dark' | 'blue' | 'blue-dark' | 'yellow' | 'nose' = 'dark';
/* token: any;
userData: any; */

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

   /*  this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
   console.log(this.token);
   console.log(this.userData.name); */
  }
  showMenu(){
    this.showLeftNav = !this.showLeftNav;

  }





}
