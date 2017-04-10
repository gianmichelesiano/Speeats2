import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertaPiattoComponent } from './offerta-piatto.component';

describe('OffertaPiattoComponent', () => {
  let component: OffertaPiattoComponent;
  let fixture: ComponentFixture<OffertaPiattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertaPiattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertaPiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
