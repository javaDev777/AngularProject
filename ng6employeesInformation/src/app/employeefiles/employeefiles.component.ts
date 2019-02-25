import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-employeefiles',
  templateUrl: './employeefiles.component.html',
  styleUrls: ['./employeefiles.component.scss']
})
export class EmployeefilesComponent implements OnInit {

    currentUrl: string;

  constructor(private router: Router) {
      router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
   }


  ngOnInit() {
  }

}
