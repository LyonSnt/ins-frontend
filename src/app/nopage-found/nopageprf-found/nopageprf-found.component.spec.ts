import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopageprfFoundComponent } from './nopageprf-found.component';

describe('NopageprfFoundComponent', () => {
  let component: NopageprfFoundComponent;
  let fixture: ComponentFixture<NopageprfFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopageprfFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopageprfFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
