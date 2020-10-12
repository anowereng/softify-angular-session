import { SaleDropdownService } from './../services/saleDropdown.service';
import { DealerSaleComponent } from './dealer-sale/dealer-sale.component';

import { CustomerSaleComponent } from './customer-sale/customer-sale.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaleRoutingModule } from './sale-routing.module';


@NgModule({
  declarations: [
    CustomerSaleComponent,
    DealerSaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    FormsModule
  ],
  providers: [
    SaleDropdownService
  ],
})
export class SaleModule { }
