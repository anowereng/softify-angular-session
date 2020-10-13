import { DealerSaleModel } from './../../models/dealerSale.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { ProductViewModel } from 'src/app/models/product-view.model';


@Injectable()
export class SaleService {
    //For Sale
    private sale = new Subject<DealerSaleModel>();
    setSale(state: DealerSaleModel) {
        this.sale.next(state);
    }
    getSale(): Observable<DealerSaleModel> {
        return this.sale.asObservable();
    }
}
