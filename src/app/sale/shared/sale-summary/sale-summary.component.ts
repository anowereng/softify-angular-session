import { SaleService } from './../../service/sale.service';
import { DealerSaleModel } from './../../../models/dealerSale.model';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sale-summary',
  templateUrl: './sale-summary.component.html',
  styleUrls: ['./sale-summary.component.scss']
})
export class SaleSummaryComponent implements OnInit {

  private subscription: Subscription;
  public model: DealerSaleModel
  
  constructor(
    private _saleService:SaleService
  ) { 
            this.model = new DealerSaleModel();
    this.subscription = this._saleService.getSale().subscribe(
      (sale: DealerSaleModel) => {
          this.model = sale;
      });
    debugger;
      // this.model = new DealerSaleModel();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

paidTotalCalculate() {
  debugger;
  if (this.model.paid > 0) {
    this.model.due = this.model.total - this.model.paid
  }
}


totalDiscount() {
  debugger;
  this.model.total -= (this.model.total * this.model.discount) / 100;
}

}
