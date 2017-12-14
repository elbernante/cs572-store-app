import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { Product } from './product';

@Injectable()
export class ProductService { 

  products: Product[];
  _producsSubject: BehaviorSubject<Product[]>;

  constructor() {
    this.products = [
      {id: 1, name: 'iPhone', price: 998.78, description: 'An overpriced phone'},
      {id: 2, name: 'iPad', price: 430.23, description: 'Apple tablet'},
      {id: 3, name: 'Apple TV', price: 299.00, description: 'TV box'}
    ];
    this._producsSubject = new BehaviorSubject<Product[]>(this.products);
  }

  getAllProducts(): Observable<Product[]> {
    return this._producsSubject.asObservable();
  }

  getProductById(id: number): Observable<Product> {
    return Observable.of(this.products.find(e => e.id === id));
  }

  addProduct(product: Product) {
    this.products.push({ ...product });
    this._producsSubject.next(this.products);
    return Observable.of(true);
  }
  
  deleteProductById(id: number): Observable<boolean> {
    this.products = this.products.filter(e => e.id !== id);
    this._producsSubject.next(this.products);
    return Observable.of(true);
  }
}
