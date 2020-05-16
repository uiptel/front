import {Component, EventEmitter, Output, Inject} from '@angular/core';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-menu',
  template: `
    <div class="container">
      <div *ngFor="let scratch of scratches" class="box">
        <app-scratch-card [src]="imgPath(scratch.img)" [title]="scratch.title"></app-scratch-card>
      </div>
    </div>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() public select = new EventEmitter<any>();

  constructor(@Inject('SCRATCHES') public readonly scratches: Scratch[]) { }
  
  imgPath(img: string): string {
    return `./assets/img/${img}`;
  }
}
