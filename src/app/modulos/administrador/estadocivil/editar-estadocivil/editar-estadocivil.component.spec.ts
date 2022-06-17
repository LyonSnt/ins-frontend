import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstadocivilComponent } from './editar-estadocivil.component';

describe('EditarEstadocivilComponent', () => {
  let component: EditarEstadocivilComponent;
  let fixture: ComponentFixture<EditarEstadocivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstadocivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstadocivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
