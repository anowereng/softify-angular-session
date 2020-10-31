import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentComponent } from './parent/parent.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [ChildOneComponent, ChildTwoComponent, ParentComponent],
  imports: [
    CommonModule,
    ParentChildRoutingModule,

  ],
  providers: [
    EmployeeService
  ],
})
export class ParentChildModule { }
