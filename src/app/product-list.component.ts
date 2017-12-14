import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { ProductService } from './product.service';
import { Product } from './product';


@Component({
  selector: 'product-list',
  template: `
    <div clas="row">
      <div class="col-sm-3">
        <div class="list-group">
          <a href="#" 
              *ngFor="let product of products$ | async; trackBy: trackByProductId"
              (click)="onSelect(product)"
              [ngClass]="getClassForProduct(product)">
              {{ product.id + ' : ' + product.name }}
          </a>
        </div>
      </div>
      <div class="col-sm-6 col-md-4">
        <product-detail [product]="selectedProduct"
                        (deleteProduct)="deleteProduct($event)">
        </product-detail>
      </div>
      <div class="col-sm-3 col-md-4">
        <product-form></product-form>
      </div>
    </div>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  selectedProduct: Product;
  
  constructor (private productService: ProductService) {}
  
  ngOnInit() {
    this.getProducts();
  }
  
  getProducts() {
    this.products$ = this.productService.getAllProducts();
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(product: Product) {
    this.productService.deleteProductById(product.id);
    this.selectedProduct = null;
  }

  trackByProductId(index: number, product: Product) {
    return product.id;
  }

  getClassForProduct(product: Product) {
    return {
      'list-group-item': true,
      'list-group-item-action': true,
      'active': product === this.selectedProduct
    };
  }
}
