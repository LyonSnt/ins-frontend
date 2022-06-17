import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraAdminComponent } from './estructura-admin.component';

describe('EstructuraAdminComponent', () => {
  let component: EstructuraAdminComponent;
  let fixture: ComponentFixture<EstructuraAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstructuraAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
