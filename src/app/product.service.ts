import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Product } from './product';

@Injectable()
export class ProductService { 

  products: Product[];

  constructor() {
    this.products = [
      {id: 1, name: 'iPhone', price: 998.78, description: 'An overpriced phone'},
      {id: 2, name: 'iPad', price: 430.23, description: 'Apple tablet'},
      {id: 3, name: 'Apple TV', price: 299.00, description: 'TV box'}
    ];
  }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product> {
    return of(this.products.find(e => e.id === id));
  }
  
  deleteProductById(id: number): Observable<boolean> {
    this.products = this.products.filter(e => e.id !== id);
    return of(true);
  }
}
