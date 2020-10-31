
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeListOneComponent } from './employee-list-one/employee-list-one.component';
import { EmployeeListTwoComponent } from './employee-list-two/employee-list-two.component';
import { ReportOneComponent } from './report/report-one/report-one.component';
import { ReportTwoComponent } from './report/report-two/report-two.component';

const routes: Routes = [
  {

    path: '',
    children: [
      {
        path: 'child-one',
        component: ChildOneComponent,
        data: {
          title: 'Customer Online Sale List'
        }
      },
      {
        path: 'child-two',
        component: ChildTwoComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      },
      {
        path: 'parent/:id',
        component: ParentComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      },
      {
        path: 'list-one',
        component: EmployeeListOneComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      },
      {
        path: 'report-one',
        component: ReportOneComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      },
      {
        path: 'report-two',
        component: ReportTwoComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      },
      {
        path: 'list-two',
        component: EmployeeListTwoComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildRoutingModule { }
