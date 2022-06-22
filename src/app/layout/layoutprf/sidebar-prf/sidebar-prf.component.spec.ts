import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPrfComponent } from './sidebar-prf.component';

describe('SidebarPrfComponent', () => {
  let component: SidebarPrfComponent;
  let fixture: ComponentFixture<SidebarPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
