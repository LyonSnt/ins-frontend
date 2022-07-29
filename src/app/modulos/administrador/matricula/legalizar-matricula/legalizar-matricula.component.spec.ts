import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalizarMatriculaComponent } from './legalizar-matricula.component';

describe('LegalizarMatriculaComponent', () => {
  let component: LegalizarMatriculaComponent;
  let fixture: ComponentFixture<LegalizarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalizarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalizarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
