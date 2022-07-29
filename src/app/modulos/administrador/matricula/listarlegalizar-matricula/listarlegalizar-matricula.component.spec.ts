import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlegalizarMatriculaComponent } from './listarlegalizar-matricula.component';

describe('ListarlegalizarMatriculaComponent', () => {
  let component: ListarlegalizarMatriculaComponent;
  let fixture: ComponentFixture<ListarlegalizarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarlegalizarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarlegalizarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
