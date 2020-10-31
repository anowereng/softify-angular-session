import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public employees: Employee[] = [];
  public employee: Employee;
  id: string;
  isShow: boolean = false;
  modalRef: BsModalRef;

  constructor(private employeeService: EmployeeService,
              private router: ActivatedRoute,
              private modalService: BsModalService) {

    this.id = this.router.snapshot.paramMap.get("id");
    debugger;
    console.log(this.id);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployesById(this.id);
    console.log(this.employees)
    this.isShow = true;
  }
}
