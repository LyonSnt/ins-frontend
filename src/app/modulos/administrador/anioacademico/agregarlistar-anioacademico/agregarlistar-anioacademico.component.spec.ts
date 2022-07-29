import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarAnioacademicoComponent } from './agregarlistar-anioacademico.component';

describe('AgregarlistarAnioacademicoComponent', () => {
  let component: AgregarlistarAnioacademicoComponent;
  let fixture: ComponentFixture<AgregarlistarAnioacademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarAnioacademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarAnioacademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
