import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EmployeelistsComponent} from './employeelists.component';


describe('EmployeelistsComponent', () => {
  let component: EmployeelistsComponent;
  let fixture: ComponentFixture<EmployeelistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
