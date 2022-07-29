import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIglesiaComponent } from './vista-iglesia.component';

describe('VistaIglesiaComponent', () => {
  let component: VistaIglesiaComponent;
  let fixture: ComponentFixture<VistaIglesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaIglesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaIglesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
