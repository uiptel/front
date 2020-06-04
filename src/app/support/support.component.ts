import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
    <section class="sectionSupport">
      <div class="sectionSupport__content">
      </div>
    </section>
  `,
})
export class SupportComponent {
  constructor() {
    console.log('support:: =>');
  }
}
