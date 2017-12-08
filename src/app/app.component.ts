import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>
    Welcome to {{title}}!
    </h1>
    <product-list></product-list>
  </div>
  `,
  styles: []
})

export class AppComponent {
  title = 'App Store';
}
