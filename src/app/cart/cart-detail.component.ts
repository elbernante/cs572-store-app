import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-detail',
  template: `
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </table>
  `,
  styles: []
})
export class CartDetailComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
