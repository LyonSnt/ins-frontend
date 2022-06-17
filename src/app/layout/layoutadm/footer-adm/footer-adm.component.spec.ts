import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdmComponent } from './footer-adm.component';

describe('FooterAdmComponent', () => {
  let component: FooterAdmComponent;
  let fixture: ComponentFixture<FooterAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
