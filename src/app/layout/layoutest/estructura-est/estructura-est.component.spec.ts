import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraEstComponent } from './estructura-est.component';

describe('EstructuraEstComponent', () => {
  let component: EstructuraEstComponent;
  let fixture: ComponentFixture<EstructuraEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
