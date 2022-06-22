import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura-adm1',
  templateUrl: './estructura-adm1.component.html',
  styleUrls: ['./estructura-adm1.component.scss']
})
export class EstructuraAdm1Component implements AfterViewInit, OnInit {

  public loader= 'assets/images/loader/loader1.gif'
  public isLoading = true;
  constructor() { }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

  ngOnInit(): void {


  }

}
