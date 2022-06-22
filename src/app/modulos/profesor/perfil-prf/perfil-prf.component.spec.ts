import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPrfComponent } from './perfil-prf.component';

describe('PerfilPrfComponent', () => {
  let component: PerfilPrfComponent;
  let fixture: ComponentFixture<PerfilPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
