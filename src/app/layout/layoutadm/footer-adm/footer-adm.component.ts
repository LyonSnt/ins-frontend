import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-adm',
  templateUrl: './footer-adm.component.html',
  styleUrls: ['./footer-adm.component.scss']
})
export class FooterAdmComponent implements OnInit {
  public faYoutube = faYoutube;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
