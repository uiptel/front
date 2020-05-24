import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-scratch-card',
  template: `
    <div class="scratch">
      <label class="confirm _round">
        <input type="radio" name="scratch" (change)="selected.emit(scratch)" class="confirm__input" />
        <div class="confirm__view">
          <div class="confirm__field" [class._error]="false">
            <div class="confirm__fieldDot"></div>
          </div>
          <span class="confirm__content">{{ scratch.title | translate }}</span>
        </div>
        <img [src]="imgPath" alt="" />
      </label>
    </div>
  `,
  styleUrls: ['./scratch-card.component.scss']
})
export class ScratchCardComponent implements OnInit {
  @Input() public readonly scratch: Scratch;
  @Output() public selected = new EventEmitter<Scratch>();

  constructor() { }

  ngOnInit(): void {
    const { img, title } = this.scratch;
    console.log({img, title});
  }

  get imgPath(): string {
    return `./assets/img/${this.scratch.img}`;
  }
}
