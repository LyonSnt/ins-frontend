import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrfComponent } from './header-prf.component';

describe('HeaderPrfComponent', () => {
  let component: HeaderPrfComponent;
  let fixture: ComponentFixture<HeaderPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
