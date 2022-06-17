import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistarSexoComponent } from './agregarlistar-sexo.component';

describe('AgregarlistarSexoComponent', () => {
  let component: AgregarlistarSexoComponent;
  let fixture: ComponentFixture<AgregarlistarSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistarSexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarlistarSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
