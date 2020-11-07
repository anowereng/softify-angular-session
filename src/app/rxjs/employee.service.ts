import { EmployeeRxModel } from './model/employee.model';

import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  CustomerSubject: Subject<Array<EmployeeRxModel>>;
  constructor() { 
    this.CustomerSubject  = new Subject<Array<EmployeeRxModel>>();
  }

  getEmployees(){
    let employees = JSON.parse(localStorage.employeeData ?? '[]') as Array<EmployeeRxModel>
    this.CustomerSubject.next(employees);
    return employees;
  }
  Save(model:EmployeeRxModel){
    debugger;
    let employees =   JSON.parse(localStorage.employeeData ?? '[]') as Array<EmployeeRxModel>
    employees.push(model);
    localStorage.employeeData=  JSON.stringify(employees);
    this.CustomerSubject.next(employees);
  }
}
