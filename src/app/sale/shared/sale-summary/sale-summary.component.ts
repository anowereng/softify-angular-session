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
    this.subscription = this._saleService.getSale().subscribe(
      (sale: DealerSaleModel) => {
          this.model = sale;
      });
      this.model = new DealerSaleModel();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}



}
