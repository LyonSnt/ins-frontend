import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroacademicoEstComponent } from './registroacademico-est.component';

describe('RegistroacademicoEstComponent', () => {
  let component: RegistroacademicoEstComponent;
  let fixture: ComponentFixture<RegistroacademicoEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroacademicoEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroacademicoEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
