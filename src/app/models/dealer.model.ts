import { ProductViewModel } from './product-view.model';
export class Dealer{
    constructor() {
        this.products = [];
        this.discount = 0;
      }
      name: string;
      mobile: string;
      address: string;
      products: ProductViewModel[];
      due: number;
      total: number;
      paid: number;
      discount: number;
      remarks: string;
}