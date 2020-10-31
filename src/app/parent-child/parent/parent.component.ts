import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public employees: any = [];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployess();
  }
}
