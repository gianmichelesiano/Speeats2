import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoPiattoComponent } from './nuovo-piatto.component';

describe('NuovoPiattoComponent', () => {
  let component: NuovoPiattoComponent;
  let fixture: ComponentFixture<NuovoPiattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoPiattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoPiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
