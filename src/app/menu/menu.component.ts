import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-menu',
  template: `
    <section class="sectionMenu">
      <div class="sectionMenu__content">
        <div class="sectionMenu__title">
          <p class="title _grey _medium">{{ 'menu.buy_topup_account' | translate }}</p>
        </div>

        <form class="sectionMenu__form" (submit)="onSubmit($event)" novalidate>
          <div class="sectionMenu__formEl _flex">
            <div class="_item" *ngFor="let scratch of scratches">
              <app-scratch-card [scratch]="scratch" (selected)="onSelected($event)">
              </app-scratch-card>
            </div>
          </div>
          <div class="sectionMenu__formEl _confirm">
            <label class="confirm _medium">
              <input type="checkbox" class="confirm__input" />
              <div class="confirm__view">
                <div class="confirm__field">
                  <div class="confirm__fieldDot"></div>
                </div>
                <span class="confirm__content">{{ 'menu.user_agreement' | translate }}</span>
              </div>
            </label>
          </div>
          <div class="sectionMenu__formEl _button">
            <div class="_item">
              <button class="button _normal _hard" type="submit" [disabled]="!isValid">
                {{ 'menu.buy_topup' | translate }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(@Inject('SCRATCHES') public readonly scratches: Scratch[]) { }
  private scratch: Scratch;

  onSelected(scratch: Scratch) {
    this.scratch = scratch;
    console.log('select => ', scratch);
  }

  onSubmit($event: Event) {
    console.log('submit =>', $event);
    $event.preventDefault();
  }

  get isValid() {
    return !!this.scratch;
  }
}
