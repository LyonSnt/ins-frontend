import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from './carousel/carousel.const';
import { ICarouselItem } from './carousel/Icarousel-item.metadata';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public carouselData: ICarouselItem[];

  constructor(
    private ruteador : Router
  ) {
   this.carouselData = CAROUSEL_DATA_ITEMS;
  }

  ngOnInit(): void {

  }

  loginAdmin(){
    this.ruteador.navigate(['/login']);
  }

  loginProfesor(){
    this.ruteador.navigate(['/logadm']);
  }

/*   loginEstudiante(){
    this.ruteador.navigate(['/logadm']);
  } */


}

