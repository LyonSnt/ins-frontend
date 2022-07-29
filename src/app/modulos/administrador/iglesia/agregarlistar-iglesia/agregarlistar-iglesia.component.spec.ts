import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarIglesiaComponent } from './agregarlistar-iglesia.component';

describe('AgregarlistarIglesiaComponent', () => {
  let component: AgregarlistarIglesiaComponent;
  let fixture: ComponentFixture<AgregarlistarIglesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarIglesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarIglesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
