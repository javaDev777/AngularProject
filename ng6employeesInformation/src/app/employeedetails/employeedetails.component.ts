import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  employeelist$: Object;
  constructor(private route: ActivatedRoute, private data: DataService) {
      this.route.params.subscribe( params => this.employeelist$ = params.id);
  }


  ngOnInit() {
      this.data.getEmployeelist(this.employeelist$).subscribe(
          data => this.employeelist$ = data
      );
  }

}
