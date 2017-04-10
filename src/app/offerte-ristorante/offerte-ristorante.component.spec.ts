import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferteRistoranteComponent } from './offerte-ristorante.component';

describe('OfferteRistoranteComponent', () => {
  let component: OfferteRistoranteComponent;
  let fixture: ComponentFixture<OfferteRistoranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferteRistoranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferteRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
