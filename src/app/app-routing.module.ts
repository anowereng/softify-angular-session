
import { SyntaxComponent } from './rxjs/syntax/syntax.component';
import { DirectiveExampleOneComponent } from './directive-example-one/directive-example-one.component';
import { SportsInfoComponent } from './sports-info/sports-info.component';
import { SportsComponent } from './sports/sports.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './rxjs/employee/employee.component';
import { CombineComponent } from './rxjs/combine/combine.component';

const routes: Routes = [
   { path: '', redirectTo: '/sale/customer-sale', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'dir-one', component: DirectiveExampleOneComponent, pathMatch: 'full' },
  { path: 'sports', component: SportsComponent },
  { path: 'rxjs/combine', component: CombineComponent },
  { path: 'syntax', component: SyntaxComponent },
  { path: 'sports/:id', component: SportsInfoComponent },
  { path: 'sale', loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule), },
  { path: 'parent-child', loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule), },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
