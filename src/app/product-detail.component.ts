import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-detail',
  template: `
    <div *ngIf="product">
      <h2> {{ product.name }} Details</h2>
      <div><span>ID:</span> {{ product.id }}</div>
      <div>
        <label>Name:
          <input [(ngModel)]="product.name" placeholder="Name" >
        </label>
      </div>
      <div>
        <label>Price:
          <input type="number" [(ngModel)]="product.price" placeholder="Price" >
        </label>
      </div>
      <div>
        <label>Description:
          <input [(ngModel)]="product.description" placeholder="Description" >
        </label>
      </div>
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
