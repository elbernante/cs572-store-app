import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>
          Welcome to {{title}}!
        </h1>
      </div>
      <cart></cart>
      <product-list></product-list>
    </div>
  `,
  styles: []
})

export class AppComponent {
  title = 'App Store';
}
