import { Category } from './../model/category-model';

import { Injectable } from '@angular/core';
import { Subject, Subscription, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

let source_categories: Category[] = [
  { catid: '1', catname: 'Category-1' },
  { catid: '2', catname: 'Category-2' },
  { catid: '3', catname: 'Category-3' },
];
const categories = of(source_categories);

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  productCategories$ = categories.pipe(
    tap((data) => console.log('categories', JSON.stringify(data)))
  );
}
