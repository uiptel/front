import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container root">
      <app-nav></app-nav>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
    `,
})
export class RootComponent {
    constructor() {}
}
