import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SaleDropdownService } from 'src/app/services/saleDropdown.service';
import { Product } from './../../interfaces/product.interface';
@Component({
  selector: 'app-customer-sale',
  templateUrl: './customer-sale.component.html',
  styleUrls: ['./customer-sale.component.css']
})
export class CustomerSaleComponent implements OnInit {

  model: Customer;

  productsList: Product[];

  customers = [
    { id: 1, name: 'anower' ,address: 'ctg'},
    { id: 2, name: 'jahed' ,address: 'dhaka'},
    { id: 3, name: 'rasel', address: 'muradpur'},
    { id: 4, name: 'sahed', address: 'banani'},
    { id: 5, name: 'jibon', address: 'agrabad'},
  ]

  warehouses = [
    { id: 1, name: 'uttara' },
    { id: 2, name: 'banani' },
    { id: 3, name: 'muradpur' },
    { id: 4, name: 'khulshi' },
    { id: 5, name: 'agrabad' },
  ]

  constructor(
    private toastr: ToastrService,
    private saleDropdownService: SaleDropdownService
  ) {
    this.warehouses = [
      { id: 1, name: 'uttara' },
      { id: 2, name: 'banani' },
      { id: 3, name: 'muradpur' },
      { id: 4, name: 'khulshi' },
      { id: 5, name: 'agrabad' },
    ]
    this.productsList = this.saleDropdownService.getProductsList();
  }

  ngOnInit(): void {
    this.model = new Customer();
    //this.mdoel = null;
  }
  save() {
    console.log(this.model)
    this.toastr.success("Saved Successfully")
  }

  addtoCart(product: Product) {
    product.qty = 1;
    this.model.products.push(product)
    this.totalPrice();
    this.totalDiscount();
  }
  removeCart(index: number) {
    this.model.products.splice(index, 1)
    this.totalDiscount();
  }

  totalPrice() {
    let total = 0; this.model.total = 0;
    for (let data of this.model.products) {
      total += data.saleprice * data.qty;
    }
    this.model.total = total;

   
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


}
export class Customer {
  constructor() {
    this.products = [];
    this.discount = 0;
  }
  id: number;
  name: string;
  address: string;
  mobile: string;
  total:number
  discount: number
  paid: number
  due: number
  remarks: string
  products: Product[]
}

export interface Sale {
  customerid: number,
  Products: [],
  warehouseId: number;
}
