import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VernotasPrfComponent } from './vernotas-prf.component';

describe('VernotasPrfComponent', () => {
  let component: VernotasPrfComponent;
  let fixture: ComponentFixture<VernotasPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VernotasPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VernotasPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
