import {Component, EventEmitter, Output, Inject} from '@angular/core';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <p class="title _grey _medium">{{'menu.buy_topup_account' | translate}}</p>
      <div class="container">
        <div *ngFor="let scratch of scratches" class="box">
          <app-scratch-card [scratch]="scratch"></app-scratch-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() public select = new EventEmitter<any>();
  constructor(@Inject('SCRATCHES') public readonly scratches: Scratch[]) { }
}
