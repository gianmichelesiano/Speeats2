import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoRistoranteComponent } from './nuovo-ristorante.component';

describe('NuovoRistoranteComponent', () => {
  let component: NuovoRistoranteComponent;
  let fixture: ComponentFixture<NuovoRistoranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoRistoranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
