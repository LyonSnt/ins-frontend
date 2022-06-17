import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura-prf',
  templateUrl: './estructura-prf.component.html',
  styleUrls: ['./estructura-prf.component.scss']
})
export class EstructuraPrfComponent implements OnInit {

  public showLeftNav = true;
  public $theme: 'dark' | 'blue' | 'blue-dark' | 'yellow' | 'nose' = 'dark';
/* token: any;
userData: any; */

  constructor(
  ) { }
//

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

