import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getEmployeelists() {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getEmployeelist(UserId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/+userId');
  }
  getEmployeereports() {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
