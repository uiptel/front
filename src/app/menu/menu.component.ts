import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <p class="title _grey _medium">{{'menu.buy_topup_account' | translate}}</p>
      <form class="container">
        <div *ngFor="let scratch of scratches" class="box">
          <app-scratch-card [scratch]="scratch" (select)="onSelect($event)"></app-scratch-card>
        </div>
      </form>
    </div>
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
