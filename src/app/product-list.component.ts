import { Component, OnInit } from '@angular/core'; 
import { Product } from './product';


@Component({
  selector: 'product-list',
  template: `
    <ul>
    <li *ngFor="let product of products"
        (click)="onSelect(product)">
        {{ product.id + ' : ' + product.name }}
      </li>
    </ul>
    <product-detail [product]="selectedProduct"
                    (deleteProduct)="deleteProduct($event)">
    </product-detail>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  
  constructor () {}
  
  ngOnInit() {
    this.products = [
      {id: 1, name: 'iPhone', price: 998.78, description: 'An overpriced phone'},
      {id: 2, name: 'iPad', price: 430.23, description: 'Apple tablet'},
      {id: 3, name: 'Apple TV', price: 299.00, description: 'TV box'}
    ];
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(product: Product) {
    this.selectedProduct = null;
    this.products = this.products.filter(e => e !== product);
  }
}
