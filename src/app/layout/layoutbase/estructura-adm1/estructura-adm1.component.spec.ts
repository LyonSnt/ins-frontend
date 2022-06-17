import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraAdm1Component } from './estructura-adm1.component';

describe('EstructuraAdm1Component', () => {
  let component: EstructuraAdm1Component;
  let fixture: ComponentFixture<EstructuraAdm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraAdm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraAdm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
