import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
      <product-list></product-list>
  `,
  styles: []
})

export class AppComponent {
  title = 'App Store';
}
