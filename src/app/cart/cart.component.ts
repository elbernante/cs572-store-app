import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <button class="btn btn-primary"
          (click)="onClick()">
          <span class="glyphicon glyphicon-shopping-cart"></span> Cart
          <span class="badge">{{ (cartSize | async) || 0 }}</span>
        </button>
      </div>
      <cart-detail *ngIf="showCart"></cart-detail>
    </div>
  `,
  styles: []
})
export class CartComponent implements OnInit {
  
  showCart: boolean = false;  
  cartSize: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSize = this.cartService.getCartSize();
  }

  onClick() {
    this.showCart = !this.showCart;
  }
}
