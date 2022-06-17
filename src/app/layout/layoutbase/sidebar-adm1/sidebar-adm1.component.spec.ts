import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdm1Component } from './sidebar-adm1.component';

describe('SidebarAdm1Component', () => {
  let component: SidebarAdm1Component;
  let fixture: ComponentFixture<SidebarAdm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAdm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
