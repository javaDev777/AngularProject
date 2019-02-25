import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefilesComponent } from './employeefiles.component';

describe('EmployeefileComponent', () => {
  let component: EmployeefilesComponent;
  let fixture: ComponentFixture<EmployeefilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeefilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
