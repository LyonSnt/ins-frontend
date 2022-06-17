import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarCargoComponent } from './agregarlistar-cargo.component';

describe('AgregarlistarCargoComponent', () => {
  let component: AgregarlistarCargoComponent;
  let fixture: ComponentFixture<AgregarlistarCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
