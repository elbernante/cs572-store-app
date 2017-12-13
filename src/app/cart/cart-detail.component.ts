import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CartService } from './cart.service';
import { LineItem } from './cart';

@Component({
  selector: 'cart-detail',
  template: `
    <div *ngIf="!(cartSize | async)" class="panel-body">No items in cart</div>
    <table *ngIf="cartSize | async" class="table">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
      <tr *ngFor="let item of items | async; trackBy: trackByProductId">
        <td>{{ item.product.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.product.price | currency }}</td>
        <td>{{ item.product | totalPrice:item.quantity | currency }}</td>
      </tr>
    </table>
  `,
  styles: []
})
export class CartDetailComponent implements OnInit {
  
  cartSize: Observable<number>;
  items : Observable<LineItem[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSize = this.cartService.getCartSize();
    this.items = this.cartService.getItems();
  }

  trackByProductId(index: number, item: LineItem) {
    return item.product.id;
  }
}
