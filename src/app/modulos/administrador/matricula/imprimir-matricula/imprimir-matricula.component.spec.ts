import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirMatriculaComponent } from './imprimir-matricula.component';

describe('ImprimirMatriculaComponent', () => {
  let component: ImprimirMatriculaComponent;
  let fixture: ComponentFixture<ImprimirMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimirMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
