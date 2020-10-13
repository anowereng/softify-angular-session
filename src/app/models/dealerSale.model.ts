import { Product } from './../interfaces/product.interface';
import { ProductViewModel } from './product-view.model';


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
  membershipCardNo: string;
  point: string;
}
