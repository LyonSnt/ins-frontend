import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavMenuPrfComponent } from './left-nav-menu-prf.component';

describe('LeftNavMenuPrfComponent', () => {
  let component: LeftNavMenuPrfComponent;
  let fixture: ComponentFixture<LeftNavMenuPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavMenuPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavMenuPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
