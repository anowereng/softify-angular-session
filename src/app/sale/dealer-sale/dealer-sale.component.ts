import { Product } from './../../interfaces/product.interface';

import { DealerSaleModel } from './../../models/dealerSale.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SaleDropdownService } from 'src/app/services/saleDropdown.service';
@Component({
  selector: 'app-dealer-sale',
  templateUrl: './dealer-sale.component.html',
  styleUrls: ['./dealer-sale.component.css']
})
export class DealerSaleComponent implements OnInit {

  model: DealerSaleModel
  productsList: Product[];
 
  constructor(
    private toastr: ToastrService,
    private saleDropdownService: SaleDropdownService
  ) { }

    ngOnInit(): void {
      this.productsList = this.saleDropdownService.getProductsList();
      this.model = new DealerSaleModel();
    }
  removeCart(index: number) {
    this.model.products.splice(index, 1)
    this.totalDiscount();
  }
  totalPrice() {
    debugger;
    let total = 0; this.model.total = 0;
    for (let data of this.model.products) {
      total += data.saleprice * data.qty;
    }
    this.model.total = total;
    console.log(this.model.total);

  }
  paidTotalCalculate() {
    debugger;
    if (this.model.paid > 0) {
      this.model.due = this.model.total - this.model.paid
    }
  }


  totalDiscount() {
    this.model.total = 0;
    this.totalPrice();
    debugger;
    this.model.total -= (this.model.total * this.model.discount) / 100;
  }
  addtoCart(product: Product) {
    product.qty = 1;
    debugger;
    this.model.products.push(product)
    this.totalPrice();
    this.totalDiscount();
  }
  save() {
    console.log(this.model)
    this.toastr.success("Saved Successfully")
  }
  reset() {
    this.model = new DealerSaleModel();
  }

}


