import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarComunidadComponent } from './agregarlistar-comunidad.component';

describe('AgregarlistarComunidadComponent', () => {
  let component: AgregarlistarComunidadComponent;
  let fixture: ComponentFixture<AgregarlistarComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
