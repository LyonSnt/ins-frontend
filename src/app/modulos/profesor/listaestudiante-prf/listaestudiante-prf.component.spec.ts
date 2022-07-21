import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaestudiantePrfComponent } from './listaestudiante-prf.component';

describe('ListaestudiantePrfComponent', () => {
  let component: ListaestudiantePrfComponent;
  let fixture: ComponentFixture<ListaestudiantePrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaestudiantePrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaestudiantePrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
