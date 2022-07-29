import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricularMatriculaComponent } from './matricular-matricula.component';

describe('MatricularMatriculaComponent', () => {
  let component: MatricularMatriculaComponent;
  let fixture: ComponentFixture<MatricularMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatricularMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricularMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
