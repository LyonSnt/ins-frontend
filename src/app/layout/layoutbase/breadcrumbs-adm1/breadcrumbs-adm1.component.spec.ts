import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsAdm1Component } from './breadcrumbs-adm1.component';

describe('BreadcrumbsAdm1Component', () => {
  let component: BreadcrumbsAdm1Component;
  let fixture: ComponentFixture<BreadcrumbsAdm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsAdm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsAdm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
