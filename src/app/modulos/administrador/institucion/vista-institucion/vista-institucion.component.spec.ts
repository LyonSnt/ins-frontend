import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInstitucionComponent } from './vista-institucion.component';

describe('VistaInstitucionComponent', () => {
  let component: VistaInstitucionComponent;
  let fixture: ComponentFixture<VistaInstitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaInstitucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
