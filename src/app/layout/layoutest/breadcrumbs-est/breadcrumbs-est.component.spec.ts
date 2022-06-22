import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsEstComponent } from './breadcrumbs-est.component';

describe('BreadcrumbsEstComponent', () => {
  let component: BreadcrumbsEstComponent;
  let fixture: ComponentFixture<BreadcrumbsEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
