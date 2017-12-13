import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../product';
import { LineItem, Cart } from './cart';


@Injectable()
export class CartService {
  cart: Cart = new Cart();
  _cartSizeSubject = new BehaviorSubject<number>(0);
  _itemsSubject = new BehaviorSubject<LineItem[]>([]);

  addItem(product: Product) : void {
    this.cart.addItem(product);
    this._cartSizeSubject.next(this.cart.size);
    this._itemsSubject.next(this.cart.items);
  }

  getCartSize() : Observable<number> {
    return this._cartSizeSubject.asObservable();
  }

  getItems() : Observable<LineItem[]> {
    return this._itemsSubject.asObservable();
  }
}
