import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPiattoComponent } from './modifica-piatto.component';

describe('ModificaPiattoComponent', () => {
  let component: ModificaPiattoComponent;
  let fixture: ComponentFixture<ModificaPiattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPiattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
