import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sale/customer-sale', pathMatch: 'full' },
  { path: 'sale', loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
