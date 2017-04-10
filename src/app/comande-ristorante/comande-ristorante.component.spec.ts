import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandeRistoranteComponent } from './comande-ristorante.component';

describe('ComandeRistoranteComponent', () => {
  let component: ComandeRistoranteComponent;
  let fixture: ComponentFixture<ComandeRistoranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandeRistoranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandeRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
