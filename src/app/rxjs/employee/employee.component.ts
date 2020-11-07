

import { EmployeeService } from './../employee.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeRxModel } from '../model/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  isAddNew:boolean;
  firstName:string;
  lastName:string;
  employees:EmployeeRxModel[]=[];
   x: Subscription;
  constructor(private employeeService:EmployeeService) {
    employeeService.CustomerSubject.subscribe(x=>{
      this.employees=  x;
    })   }
    
  ngOnDestroy(): void {
    this.x.unsubscribe();
  }

  ngOnInit(): void {
    this.isAddNew =  false;
    this.getEmployees();
  }
  reset(){
    this.firstName="";
    this.lastName ="";
  }
  addnew(){
    this.isAddNew = true;
  }
   getEmployees(){
     this.employees= <EmployeeRxModel[]>  this.employeeService.getEmployees();
   }
   saveEmployee(){
      this.employeeService.Save(new EmployeeRxModel(this.firstName, this.lastName))
      this.isAddNew = false;
      this.reset();
   }


}
