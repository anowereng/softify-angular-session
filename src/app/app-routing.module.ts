import { SportsInfoComponent } from './sports-info/sports-info.component';
import { SportsComponent } from './sports/sports.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sale/customer-sale', pathMatch: 'full' },
  { path: 'sports', component: SportsComponent },
  { path: 'sports/:id', component: SportsInfoComponent },
  { path: 'sale', loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule), },
  { path: 'parent-child', loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule), },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
