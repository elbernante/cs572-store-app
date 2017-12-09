import { Component, OnInit } from '@angular/core'; 
import { ProductService } from './product.service';
import { Product } from './product';


@Component({
  selector: 'product-list',
  template: `
    <div clas="row">
      <div class="col-sm-3">
        <div class="list-group">
          <a href="#" 
              *ngFor="let product of products"
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
    </div>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  
  constructor (private productService: ProductService) {}
  
  ngOnInit() {
    this.getProducts();
  }
  
  getProducts() {
    this.productService
        .getAllProducts()
        .subscribe(p => this.products = p);
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(product: Product) {
    this.productService
        .deleteProductById(product.id)
        .subscribe(res => {
          if (res) {
            this.selectedProduct = null;
            this.getProducts();
          }
        });
  }

  getClassForProduct(product: Product) {
    return {
      'list-group-item': true,
      'list-group-item-action': true,
      'active': product === this.selectedProduct
    };
  }
}
