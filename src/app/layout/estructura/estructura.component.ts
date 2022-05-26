import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  public showLeftNav = true;
  public $theme: 'dark' | 'red' | 'blue-dark' | 'yellow' = 'dark';
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    //this.toastr.success('Bienvenido', 'Info!');
  }
  showMenu(){
    this.showLeftNav = !this.showLeftNav;

  }

}
