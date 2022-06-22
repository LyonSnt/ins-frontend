import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEstComponent } from './sidebar-est.component';

describe('SidebarEstComponent', () => {
  let component: SidebarEstComponent;
  let fixture: ComponentFixture<SidebarEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
