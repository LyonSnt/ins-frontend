import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopageestFoundComponent } from './nopageest-found.component';

describe('NopageestFoundComponent', () => {
  let component: NopageestFoundComponent;
  let fixture: ComponentFixture<NopageestFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopageestFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopageestFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
