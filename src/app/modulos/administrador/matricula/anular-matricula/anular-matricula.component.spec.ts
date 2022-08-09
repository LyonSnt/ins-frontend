import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularMatriculaComponent } from './anular-matricula.component';

describe('AnularMatriculaComponent', () => {
  let component: AnularMatriculaComponent;
  let fixture: ComponentFixture<AnularMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnularMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnularMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
