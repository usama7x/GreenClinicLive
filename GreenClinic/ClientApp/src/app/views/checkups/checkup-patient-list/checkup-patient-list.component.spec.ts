import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckupPatientListComponent } from './checkup-patient-list.component';

describe('CheckupPatientListComponent', () => {
  let component: CheckupPatientListComponent;
  let fixture: ComponentFixture<CheckupPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckupPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckupPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
