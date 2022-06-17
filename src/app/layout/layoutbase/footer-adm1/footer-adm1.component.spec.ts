import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdm1Component } from './footer-adm1.component';

describe('FooterAdm1Component', () => {
  let component: FooterAdm1Component;
  let fixture: ComponentFixture<FooterAdm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAdm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAdm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
