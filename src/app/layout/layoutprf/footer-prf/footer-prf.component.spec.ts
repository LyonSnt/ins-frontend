import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrfComponent } from './footer-prf.component';

describe('FooterPrfComponent', () => {
  let component: FooterPrfComponent;
  let fixture: ComponentFixture<FooterPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
