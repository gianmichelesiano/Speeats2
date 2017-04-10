import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineCompletoComponent } from './ordine-completo.component';

describe('OrdineCompletoComponent', () => {
  let component: OrdineCompletoComponent;
  let fixture: ComponentFixture<OrdineCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdineCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdineCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
