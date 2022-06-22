import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEstComponent } from './notas-est.component';

describe('NotasEstComponent', () => {
  let component: NotasEstComponent;
  let fixture: ComponentFixture<NotasEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
