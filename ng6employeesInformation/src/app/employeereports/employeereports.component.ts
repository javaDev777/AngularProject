import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employeereports',
  templateUrl: './employeereports.component.html',
  styleUrls: ['./employeereports.component.scss']
})
export class EmployeereportsComponent implements OnInit {
 employeereports$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.getEmployeereports().subscribe(
      data => this.employeereports$ = data
    );
  }

}


