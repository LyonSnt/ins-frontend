import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura-est',
  templateUrl: './estructura-est.component.html',
  styleUrls: ['./estructura-est.component.scss']
})
export class EstructuraEstComponent implements AfterViewInit, OnInit {
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
