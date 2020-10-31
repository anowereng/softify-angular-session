
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';

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
        path: 'parent',
        component: ParentComponent,
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
