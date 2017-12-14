import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'product-form',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">Create New Product</div>
      <form class="form-horizontal" role="form"
          #productForm="ngForm"
          (ngSubmit)="onSubmit(productForm)">
        <div class="form-group">
          <label class="col-xs-1 col-md-3">ID:</label>
          <div class="col-md-9">
            <input [(ngModel)]="product.id" 
                name="productId" 
                #product_id="ngModel"
                required
                type="number" class="form-control" placeholder="id">
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3">Name:</label>
          <div class="col-md-9">
            <input [(ngModel)]="product.name" 
                name="name"
                #name="ngModel"
                required
                type="text" class="form-control" placeholder="name">
            <div *ngIf="name.invalid && (name.dirty || name.touched)" 
                class="alert alert-danger">
              <div *ngIf="name.errors.required">
                Name is required.
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3">Price:</label>
          <div class="col-md-9">
            <input [(ngModel)]="product.price"
                name="price"
                #price="ngModel"
                required
                type="number" class="form-control" placeholder="price">
            <div *ngIf="price.invalid && (price.dirty || price.touched)"
                class="alert alert-danger">
              <div *ngIf="price.errors.required">Price is required.</div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3">Description:</label>
          <div class="col-md-9">
            <textarea [(ngModel)]="product.description"
                name="description"
                #description="ngModel"
                type="text" class="form-control" placeholder="description">
            </textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-3 col-md-9">
            <button (click)="onCancel(productForm)" 
                    type="button" class="btn btn-danger">
              <span class="glyphicon glyphicon-remove-circle"></span>
              Cancel
            </button>
            <button type="submit" class="btn btn-success"
                [disabled]="!productForm.form.valid">
              <span class="glyphicon glyphicon-ok-circle"></span>
              Save
            </button>
          </div>
        </div>
      </form> 
      {{ product | json }}
    </div>
  `,
  styles: ['.form-horizontal { margin: 10px }']
})
export class ProductFormComponent implements OnInit {
 
  product: Product = new Product(null, '', null, '');

  constructor(private productService: ProductService) {}

  ngOnInit() {

  }

  onCancel(productForm: any) {
    productForm.reset();
  }

  onSubmit(productForm: any) {
    this.productService.addProduct(this.product);
    productForm.reset();
  }

}
