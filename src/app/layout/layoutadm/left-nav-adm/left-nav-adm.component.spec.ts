import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavAdmComponent } from './left-nav-adm.component';

describe('LeftNavAdmComponent', () => {
  let component: LeftNavAdmComponent;
  let fixture: ComponentFixture<LeftNavAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
