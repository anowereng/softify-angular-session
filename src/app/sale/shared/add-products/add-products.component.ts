
import { DealerSaleModel } from './../../../models/dealerSale.model';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { SaleDropdownService } from 'src/app/services/saleDropdown.service';
import { ProductViewModel } from 'src/app/models/product-view.model';
import { SaleService } from '../../service/sale.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  @Input() sale: DealerSaleModel
   
   productsList: Product[];
  constructor(
    private saleDropdownService: SaleDropdownService,
    private _saleService: SaleService
  ) { 

  }

    ngOnInit(): void {
      this.productsList = this.saleDropdownService.getProductsList();
    }
    removeCart(index: number) {
      this.sale.products.splice(index, 1)
      this.totalPrice();
    }
    totalPrice() {
      debugger;
      let total = 0; this.sale.total = 0;
      for (let data of this.sale.products) {
        total += data.saleprice * data.qty;
      }
      this.sale.total = total;
      console.log(this.sale.total);
      this._saleService.setSale(this.sale);
  
    }
    
    addtoCart(product: Product) {
      product.qty = 1;
      debugger;
      this.sale.products.push(product)
      this.totalPrice();
    }
}
