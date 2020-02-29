import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInfectadosComponent } from './lista-infectados.component';

describe('ListaInfectadosComponent', () => {
  let component: ListaInfectadosComponent;
  let fixture: ComponentFixture<ListaInfectadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInfectadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInfectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
