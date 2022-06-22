import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from './carousel/carousel.const';
import { ICarouselItem } from './carousel/Icarousel-item.metadata';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements AfterViewInit, OnInit {
  public carouselData: ICarouselItem[];
  public loader = 'assets/images/loader/loader1.gif'
  public isLoading = true;
  constructor(
    private ruteador: Router
  ) {
    this.carouselData = CAROUSEL_DATA_ITEMS;
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
   
  }

  loginAdmin() {
    this.ruteador.navigate(['/login']);
  }


}

