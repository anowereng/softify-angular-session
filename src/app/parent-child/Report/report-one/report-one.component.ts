import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from '../../employee.service';
import { ModalDirective, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent implements OnInit {

  employee: Employee;
  id: string;

  constructor(
    private employeeService: EmployeeService, public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    debugger;
    this.employee = this.employeeService.getEmployesById(this.id);
  }
  hideChildModal(): void {
    this.bsModalRef.hide();
  }
}
