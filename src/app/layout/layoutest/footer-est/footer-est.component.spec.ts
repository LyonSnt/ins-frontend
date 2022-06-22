import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEstComponent } from './footer-est.component';

describe('FooterEstComponent', () => {
  let component: FooterEstComponent;
  let fixture: ComponentFixture<FooterEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
