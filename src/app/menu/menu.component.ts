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

        <form class="sectionMenu__form">
          <div class="sectionMenu__formEl _flex">
            <div class="_item" *ngFor="let scratch of scratches" >
              <app-scratch-card [scratch]="scratch" (select)="onSelect($event)">
              </app-scratch-card>
            </div>
          </div>
          <div class="sectionMenu__formEl">
            <button class="button _normal _hard">{{ 'menu.buy_topup' | translate }}</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() public submit = new EventEmitter<any>();

  constructor(@Inject('SCRATCHES') public readonly scratches: Scratch[]) { }

  onSelect(scratch: Scratch) {
    console.log('select => ', scratch);
  }
}
