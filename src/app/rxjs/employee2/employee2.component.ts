import { EmployeeService } from './../employee.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeRxModel } from '../model/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit , OnDestroy{

  enployees:Array<EmployeeRxModel>=[];
  x:Subscription
  constructor(private employeeService: EmployeeService) { 
    this.employeeService.CustomerSubject.subscribe(x=>{this.enployees = x})
  }
  ngOnDestroy(): void {
    this.x.unsubscribe();
  }

  ngOnInit(): void {
  } 

}
