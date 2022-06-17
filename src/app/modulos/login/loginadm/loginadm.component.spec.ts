import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadmComponent } from './loginadm.component';

describe('LoginadmComponent', () => {
  let component: LoginadmComponent;
  let fixture: ComponentFixture<LoginadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginadmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
