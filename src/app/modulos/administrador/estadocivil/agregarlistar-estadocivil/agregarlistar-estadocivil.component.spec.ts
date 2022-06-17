import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarEstadocivilComponent } from './agregarlistar-estadocivil.component';

describe('AgregarlistarEstadocivilComponent', () => {
  let component: AgregarlistarEstadocivilComponent;
  let fixture: ComponentFixture<AgregarlistarEstadocivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarEstadocivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarEstadocivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
