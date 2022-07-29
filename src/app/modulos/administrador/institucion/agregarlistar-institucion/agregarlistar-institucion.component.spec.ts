import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarInstitucionComponent } from './agregarlistar-institucion.component';

describe('AgregarlistarInstitucionComponent', () => {
  let component: AgregarlistarInstitucionComponent;
  let fixture: ComponentFixture<AgregarlistarInstitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarInstitucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
