import { DealerSaleComponent } from './dealer-sale/dealer-sale.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerSaleComponent } from './customer-sale/customer-sale.component';

const routes: Routes = [
  {

    path: '',
    children: [
      {
        path: 'customer-sale',
        component: CustomerSaleComponent,
        data: {
          title: 'Customer Online Sale List'
        }
      },
      {
        path: 'dealer-sale',
        component: DealerSaleComponent,
        data: {
          title: 'Dealer Online Sale List'
        }
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
