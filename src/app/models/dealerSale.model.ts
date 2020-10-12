import { Product } from '../interfaces/product.interface';


export class DealerSaleModel {
  constructor() {
    this.products = [];
    this.discount = 0;
  }
  name: string;
  mobile: string;
  address: string;
  products: Product[];
  due: number;
  total: number;
  paid: number;
  discount: number;
  remarks: string;
}
