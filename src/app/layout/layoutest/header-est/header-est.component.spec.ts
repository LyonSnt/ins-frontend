import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEstComponent } from './header-est.component';

describe('HeaderEstComponent', () => {
  let component: HeaderEstComponent;
  let fixture: ComponentFixture<HeaderEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
