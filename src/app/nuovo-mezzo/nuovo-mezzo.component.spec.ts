import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoMezzoComponent } from './nuovo-mezzo.component';

describe('NuovoMezzoComponent', () => {
  let component: NuovoMezzoComponent;
  let fixture: ComponentFixture<NuovoMezzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoMezzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoMezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
