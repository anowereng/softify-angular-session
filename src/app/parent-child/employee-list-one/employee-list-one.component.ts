import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { BsModalService, ModalDirective, BsModalRef } from 'ngx-bootstrap/modal';
import { ReportOneComponent } from '../report/report-one/report-one.component';

@Component({
  selector: 'app-employee-list-one',
  templateUrl: './employee-list-one.component.html',
  styleUrls: ['./employee-list-one.component.css']
})
export class EmployeeListOneComponent implements OnInit {
    modalRef: any;
    employees: Employee[];
    empid: string;
    isShow: boolean = false;
    bsModalRef: BsModalRef;

    constructor(
      private employeeService: EmployeeService, private modalService: BsModalService) {
    }

    ngOnInit(): void {
      this.employees = this.employeeService.getEmployess();
      console.log(this.employees)
    }

    Receipt(empid: string) {
      debugger;
      this.empid = empid;
      this.isShow = true;
      let initialState = {
        id: this.empid
      };
      this.bsModalRef = this.modalService.show(ReportOneComponent, { initialState, class: 'modal-lg', backdrop: 'static', });
    }

}
