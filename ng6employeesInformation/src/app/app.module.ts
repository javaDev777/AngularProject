// Other imports removed for brevity
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistsComponent } from './employeelists/employeelists.component';
import {EmployeefilesComponent} from './employeefiles/employeefiles.component';
import {EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import {EmployeereportsComponent} from './employeereports/employeereports.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployeefilesComponent,
    EmployeelistsComponent,
    EmployeedetailsComponent,
    EmployeereportsComponent,
    BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


