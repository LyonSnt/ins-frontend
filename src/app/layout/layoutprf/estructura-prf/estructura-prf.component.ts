import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura-prf',
  templateUrl: './estructura-prf.component.html',
  styleUrls: ['./estructura-prf.component.scss']
})
export class EstructuraPrfComponent implements AfterViewInit, OnInit {


  public loader= 'assets/images/loader/loader1.gif'
  public isLoading = true;
  constructor() { }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

  ngOnInit(): void {

   /*  this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
   console.log(this.token);
   console.log(this.userData.name); */
  }





}

