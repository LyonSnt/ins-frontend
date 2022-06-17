import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdm1Component } from './header-adm1.component';

describe('HeaderAdm1Component', () => {
  let component: HeaderAdm1Component;
  let fixture: ComponentFixture<HeaderAdm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
