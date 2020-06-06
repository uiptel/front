import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
    <section class="sectionSupport">
      <div class="sectionSupport__content">
        <div class="sectionSupport__list">
          <ul class="unstyled">
            <li *ngFor="let item of ussd" class="ussd">
              <div class="_title">
                {{ 'ussd.' + item + '_description' | translate }}
              </div>
              <div class="_command">
                <span class="_command__content">{{ 'ussd.' + item | translate }}</span>
                <span class="icon icon-phone-invert"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class SupportComponent {
  public ussd: string[] = ['topup', 'transfer', 'balance', 'info', 'my_number'];
}
