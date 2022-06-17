import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavPrfComponent } from './left-nav-prf.component';

describe('LeftNavPrfComponent', () => {
  let component: LeftNavPrfComponent;
  let fixture: ComponentFixture<LeftNavPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
