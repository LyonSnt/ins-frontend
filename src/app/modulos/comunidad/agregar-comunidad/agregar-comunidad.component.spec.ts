import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComunidadComponent } from './agregar-comunidad.component';

describe('AgregarComunidadComponent', () => {
  let component: AgregarComunidadComponent;
  let fixture: ComponentFixture<AgregarComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
