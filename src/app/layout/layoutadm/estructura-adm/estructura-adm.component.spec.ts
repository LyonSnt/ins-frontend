import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraAdmComponent } from './estructura-adm.component';

describe('EstructuraAdmComponent', () => {
  let component: EstructuraAdmComponent;
  let fixture: ComponentFixture<EstructuraAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
