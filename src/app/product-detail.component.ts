import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'product-detail',
  template: `
    <div *ngIf="product" class="panel panel-primary">
      <div class="panel-heading"> {{ product.name }} </div>
      <div class="form-horizontal" role="form">
        <div class="form-group">
          <label class="col-xs-1 col-md-3">ID:</label>
          <div class="col-xs-10 col-md-9">
            <span> {{ product.id }}</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3">Name:</label>
          <div class="col-md-9">
            <input [(ngModel)]="product.name" 
                   type="text" class="form-control" placeholder="name">
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3">Price:</label>
          <div class="col-md-9">
            <input [(ngModel)]="product.price" 
                   type="number" class="form-control" placeholder="price">
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3">Description:</label>
          <div class="col-md-9">
            <input [(ngModel)]="product.description" 
                   type="text" class="form-control" placeholder="description">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-3 col-md-9">
            <button (click)="requestDelete()" 
                    type="button" class="btn btn-danger">
              <span class="glyphicon glyphicon-remove-circle"></span>
              Delete
            </button>
            <button (click)="addToCart()" 
                    type="button" class="btn btn-success">
              <span class="glyphicon glyphicon-ok-circle"></span>
              Add to cart
            </button>
          </div>
        </div>
      </div> 
    </div>
  `,
  styles: ['.form-horizontal { margin: 10px }']
})
export class ProductDetailComponent implements OnInit {
  
  @Input() product: Product;
  @Output() deleteProduct = new EventEmitter<Product>();

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  requestDelete() {
    this.deleteProduct.emit(this.product);
  }

  addToCart() {
    this.cartService.addItem(this.product);
  }
}
