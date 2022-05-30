import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSexoComponent } from './agregar-sexo.component';

describe('AgregarSexoComponent', () => {
  let component: AgregarSexoComponent;
  let fixture: ComponentFixture<AgregarSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
