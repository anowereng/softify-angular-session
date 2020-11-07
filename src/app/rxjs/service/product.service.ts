import { CategoryService } from './category.service';
import { ProductRXModel } from './../model/product-model';

import { Category } from './../model/category-model';

import { Injectable } from '@angular/core';
import { Subject, Subscription, of, combineLatest } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';


let source_products: ProductRXModel[] = [
  { id: '1', name: 'Product-1',price:500,catid:'1' },
  { id: '2', name: 'Product-2',price:400,catid:'2' },
  { id: '3', name: 'Product-3',price:600,catid:'3' },
];
const products_data = of(source_products);

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private categoryService: CategoryService) {}

  products$ =  products_data.pipe(
    map(
      products=>products.map(
        product=>({
          ...product,
          price:product.price * 2,
          code:product.code??'code-12'
        }) as ProductRXModel
    ),
    tap(data=>console.log('Prodcuts:',JSON.stringify(data)))
    )
  )
  
  productsWithCategory$ =  combineLatest([
    this.products$,
    this.categoryService.productCategories$]).pipe(
      map(([products,categories])=>products.map(
          product=>({
            ...product,
            price:product.price * 2,
            categoryName:categories.find(c=>c.catid === product.id).catname,
            code:product.code??'code-12'
          }) as ProductRXModel
      ),
      tap(data=>console.log('Prodcuts:',JSON.stringify(data)))
      )
    )
   
  
 
}
