import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-prf',
  templateUrl: './footer-prf.component.html',
  styleUrls: ['./footer-prf.component.scss']
})
export class FooterPrfComponent implements OnInit {
  public faYoutube = faYoutube;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
