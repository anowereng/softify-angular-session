import { ProductRXModel } from './../model/product-model';
import { ProductService } from './../service/product.service';
import { CategoryService } from './../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category-model';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.css']
})
export class CombineComponent implements OnInit {

  catdata:Category[];
  proddata:ProductRXModel[];
  constructor(
    private catService: CategoryService,
    private ProductService: ProductService,
    ) { }

  ngOnInit(): void {
    this.getCategories();
    // this.getProducts();
    this.getProductsWithCategories();
  }
  getCategories(){
    this.catService.productCategories$.subscribe(
      response =>{
        this.catdata=<Category[]>response;
      }
    )
  }

  getProducts(){
    this.ProductService.products$.subscribe(
      response =>{
        this.proddata = <ProductRXModel[]>response;
      }
    )
  }

  getProductsWithCategories(){
    this.ProductService.productsWithCategory$.subscribe(
      response =>{
        this.proddata = <ProductRXModel[]>response;
      }
    )
  }

}
