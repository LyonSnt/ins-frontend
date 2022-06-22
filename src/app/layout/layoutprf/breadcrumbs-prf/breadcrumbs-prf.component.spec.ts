import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsPrfComponent } from './breadcrumbs-prf.component';

describe('BreadcrumbsPrfComponent', () => {
  let component: BreadcrumbsPrfComponent;
  let fixture: ComponentFixture<BreadcrumbsPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
