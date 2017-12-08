import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-detail',
  template: `
    <div *ngIf="product">
      <h2> {{ product.name }} Details</h2>
      <button (click)="requestDelete()">Delete</button>
    </div>
  `,
  styles: []
})
export class ProductDetailComponent implements OnInit {
  
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  requestDelete() {
    this.deleteProduct.emit(this.product);
  }
}
