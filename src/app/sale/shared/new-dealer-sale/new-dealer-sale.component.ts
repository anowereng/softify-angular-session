import { Dealer } from './../../../models/dealer.model';
import { Component, Input, OnInit } from '@angular/core';
import { DealerSaleModel } from 'src/app/models/dealerSale.model';

@Component({
  selector: 'app-new-dealer-sale',
  templateUrl: './new-dealer-sale.component.html',
  styleUrls: ['./new-dealer-sale.component.scss']
})
export class NewDealerSaleComponent implements OnInit {
  model: Dealer
  
  constructor() { 
    this.model = new Dealer();
  }

  ngOnInit() {
  }
  

}
