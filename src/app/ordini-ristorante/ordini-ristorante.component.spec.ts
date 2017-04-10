import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiniRistoranteComponent } from './ordini-ristorante.component';

describe('OrdiniRistoranteComponent', () => {
  let component: OrdiniRistoranteComponent;
  let fixture: ComponentFixture<OrdiniRistoranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdiniRistoranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdiniRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
