import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
    <section class="sectionSupport">
      <div class="sectionSupport__content">
        <div class="sectionSupport__list">
          <ul class="unstyled">
            <li>
              <div>
                <span class="ussd">* 100 * {{ 'support.scratch_code' | translate }} #</span>
                <span class="icon icon-phone-invert"></span>
              </div>
            </li>
            <li>
              <div>
                <span class="ussd">
                  * 101 * 2 * {{ 'support.transfer_amount' | translate }} * {{ 'support.destination_number' | translate }} #
                </span>
                <span class="icon icon-phone-invert"></span>
              </div>
            </li>
            <li>
              <div>
                <span class="ussd">* 101 #</span>
                <span class="icon icon-phone-invert"></span>
              </div>
            </li>
            <li>
              <div>
                <span class="ussd">* 161 #</span>
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
  constructor() {
    console.log('support:: =>');
  }
}
