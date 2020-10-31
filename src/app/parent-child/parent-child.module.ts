import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentComponent } from './parent/parent.component';
import { EmployeeService } from './employee.service';
import { NgxPrintModule } from 'ngx-print';
// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmployeeListOneComponent } from './employee-list-one/employee-list-one.component';
import { EmployeeListTwoComponent } from './employee-list-two/employee-list-two.component';
import { ReportOneComponent } from './report/report-one/report-one.component';
import { ReportTwoComponent } from './report/report-two/report-two.component';
@NgModule({
  declarations: [
                  ChildOneComponent, ChildTwoComponent, ParentComponent,
                  EmployeeListOneComponent, EmployeeListTwoComponent,
                  ReportOneComponent, ReportTwoComponent
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule,
    NgxPrintModule,
    BsDatepickerModule,
     ModalModule.forRoot()
  ],
  providers: [
    EmployeeService
  ],
  entryComponents: [ReportOneComponent],
})
export class ParentChildModule { }
