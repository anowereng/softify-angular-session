import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductViewModel } from '../models/product-view.model';

@Injectable({
  providedIn: 'root'
})
export class SaleDropdownService {

  private products = [
    { id: 1, name: 'milk', saleprice: 100 , stock:10 , qty:0},
    { id: 2, name: 'choclate', saleprice: 100, stock: 10, qty: 0 },
    { id: 3, name: 'mouse', saleprice: 200, stock: 10, qty: 0 },
    { id: 4, name: 'bread', saleprice: 300, stock: 10, qty: 0 },
    { id: 5, name: 'peanut', saleprice: 30, stock: 10, qty: 0 },
  ]
    

constructor() { }


  getProductsList():Product[]{
    return this.products;
  }
}
