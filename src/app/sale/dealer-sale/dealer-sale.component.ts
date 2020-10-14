import { Product } from './../../interfaces/product.interface';

import { SaleService } from './../service/sale.service';
import { DealerSaleModel } from './../../models/dealerSale.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SaleDropdownService } from 'src/app/services/saleDropdown.service';
import { Subscription } from 'rxjs';
import { ProductViewModel } from 'src/app/models/product-view.model';
import { NewDealerSaleComponent } from '../shared/new-dealer-sale/new-dealer-sale.component';
import { SaleSummaryComponent } from '../shared/sale-summary/sale-summary.component';
@Component({
  selector: 'app-dealer-sale',
  templateUrl: './dealer-sale.component.html',
  styleUrls: ['./dealer-sale.component.css']
})
export class DealerSaleComponent implements OnInit {
  isShow: boolean = true;
  model: DealerSaleModel

  productsList: Product[];
  private subscription: Subscription;

  //@ViewChild("NewDealerSaleComponent")
  //newDealerSaleComponent: NewDealerSaleComponent

  //@ViewChild("SaleSummaryComponent")
  //saleSummaryComponent: SaleSummaryComponent

  constructor(
    private toastr: ToastrService,
    private saleDropdownService: SaleDropdownService,
    private _saleService: SaleService

  ) {
    this.subscription = this._saleService.getSale().subscribe(
      (sale: DealerSaleModel) => {
        // this.savingDisabled = false;
      });
    this.model = new DealerSaleModel();
    this.isShow = true;
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  init() {
    this.productsList = this.saleDropdownService.getProductsList();
  }

  save() {
    console.log(this.model)
    this.toastr.success("Saved Successfully")
  }
  reset() {
    this.model = new DealerSaleModel();
  }

}


