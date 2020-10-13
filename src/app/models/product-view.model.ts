import { Product } from '../interfaces/product.interface';

export class ProductViewModel{
    constructor() {
        this.products = [];
  }
  id: number;
  name: string;
  saleprice: number;
  stock: number;
  qty: number;
  products : Product[];
}