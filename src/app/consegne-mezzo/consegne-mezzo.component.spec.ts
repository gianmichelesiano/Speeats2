import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsegneMezzoComponent } from './consegne-mezzo.component';

describe('ConsegneMezzoComponent', () => {
  let component: ConsegneMezzoComponent;
  let fixture: ComponentFixture<ConsegneMezzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsegneMezzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsegneMezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
