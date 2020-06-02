import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-sale-point',
  template: `
    <section>
      <div class="title">
        <p>Sale Points</p>
      </div>
    </section>
  `,
})
export class SalePointComponent {
  constructor() {
    console.log('sp:: =>');
  }
}
