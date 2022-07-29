import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmatricularMatriculaComponent } from './listarmatricular-matricula.component';

describe('ListarmatricularMatriculaComponent', () => {
  let component: ListarmatricularMatriculaComponent;
  let fixture: ComponentFixture<ListarmatricularMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmatricularMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmatricularMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
