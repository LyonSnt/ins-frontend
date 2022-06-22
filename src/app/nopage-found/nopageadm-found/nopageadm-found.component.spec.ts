import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopageadmFoundComponent } from './nopageadm-found.component';

describe('NopageadmFoundComponent', () => {
  let component: NopageadmFoundComponent;
  let fixture: ComponentFixture<NopageadmFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopageadmFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopageadmFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
