import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrfComponent } from './dashboard-prf.component';

describe('DashboardPrfComponent', () => {
  let component: DashboardPrfComponent;
  let fixture: ComponentFixture<DashboardPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
