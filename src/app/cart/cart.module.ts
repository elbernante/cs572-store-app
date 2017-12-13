import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component'; 
import { CartDetailComponent } from './cart-detail.component';
import { CartService } from './cart.service';

import { TotalPricePipe } from './total-price.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartComponent,
    CartDetailComponent,
    TotalPricePipe
  ],
  exports: [
    CartComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
