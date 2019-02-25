import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistsComponent } from './employeeLists/employeelists.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeereportsComponent } from './employeereports/employeereports.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeelistsComponent
  },
  {
    path: 'employeedetails/:id',
    component: EmployeedetailsComponent
  },
  {
    path: 'employeereports',
    component: EmployeereportsComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
