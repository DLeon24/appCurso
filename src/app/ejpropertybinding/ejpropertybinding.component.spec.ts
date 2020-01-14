import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjpropertybindingComponent } from './ejpropertybinding.component';

describe('EjpropertybindingComponent', () => {
  let component: EjpropertybindingComponent;
  let fixture: ComponentFixture<EjpropertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjpropertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjpropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
