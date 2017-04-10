import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaRistoranteComponent } from './modifica-ristorante.component';

describe('ModificaRistoranteComponent', () => {
  let component: ModificaRistoranteComponent;
  let fixture: ComponentFixture<ModificaRistoranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaRistoranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
