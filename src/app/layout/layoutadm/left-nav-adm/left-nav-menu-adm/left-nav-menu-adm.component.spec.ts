import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavMenuAdmComponent } from './left-nav-menu-adm.component';

describe('LeftNavMenuAdmComponent', () => {
  let component: LeftNavMenuAdmComponent;
  let fixture: ComponentFixture<LeftNavMenuAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavMenuAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavMenuAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
