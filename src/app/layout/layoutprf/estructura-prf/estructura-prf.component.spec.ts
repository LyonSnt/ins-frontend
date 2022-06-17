import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraPrfComponent } from './estructura-prf.component';

describe('EstructuraPrfComponent', () => {
  let component: EstructuraPrfComponent;
  let fixture: ComponentFixture<EstructuraPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
