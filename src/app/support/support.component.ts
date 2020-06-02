import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
    <section>
      <div class="title">
        <p>Support</p>
      </div>
    </section>
  `,
})
export class SupportComponent {
  constructor() {
    console.log('support:: =>');
  }
}
