import { AuthServiceService } from '@servicios/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estructura-adm',
  templateUrl: './estructura-adm.component.html',
  styleUrls: ['./estructura-adm.component.scss']
})
export class EstructuraAdmComponent implements OnInit {

  public showLeftNav = true;
  public $theme: 'dark' | 'blue' | 'blue-dark' | 'yellow' | 'nose' = 'dark';
/* token: any;
userData: any; */

  constructor(
    private toastr: ToastrService,
    public authService: AuthServiceService
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

