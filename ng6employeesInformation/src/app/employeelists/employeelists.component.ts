import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

Component({
  selector: 'app-employeelists',
  templateUrl: './employeelists.component.html',
  styleUrls: ['./employeelists.component.scss'],
animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
                optional: true
        })
      ])
    ])
]});
export class EmployeelistsComponent implements OnInit {


    employeelist$; Object;
    constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getEmployeelists().subscribe(
      data => this.employeelist$ = data
      );
  }

}

