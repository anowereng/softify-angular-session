import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleSummaryComponent } from './shared/sale-summary/sale-summary.component';
import { SaleService } from './service/sale.service';
import { NewDealerSaleComponent } from './shared/new-dealer-sale/new-dealer-sale.component';
import { NewCustomerSaleComponent } from './shared/new-customer-sale/new-customer-sale.component';
import { AddProductsComponent } from './shared/add-products/add-products.component';
import { SaleDropdownService } from './../services/saleDropdown.service';
import { DealerSaleComponent } from './dealer-sale/dealer-sale.component';

import { CustomerSaleComponent } from './customer-sale/customer-sale.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaleRoutingModule } from './sale-routing.module';


@NgModule({
  declarations: [
    CustomerSaleComponent,
    DealerSaleComponent,
    AddProductsComponent,
    NewCustomerSaleComponent,
    NewDealerSaleComponent,
    SaleSummaryComponent,
    SaleListComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    FormsModule
  ],
  providers: [
    SaleDropdownService,
    SaleService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SaleModule { }
