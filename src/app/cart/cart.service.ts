import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Product } from '../product';
import { LineItem, Cart } from './cart';


@Injectable()
export class CartService {
  cart: Cart = new Cart();
  i = 0;
  _cartSizeSubject = new Subject<number>();
  _itemsSubject = new Subject<LineItem[]>();

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
