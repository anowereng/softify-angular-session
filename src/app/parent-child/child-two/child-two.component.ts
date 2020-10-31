import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Input() employee:Employee
  constructor(private employeeservice: EmployeeService) {
      
  }

  ngOnInit(): void {
  }

}
