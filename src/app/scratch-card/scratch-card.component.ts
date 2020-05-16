import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-scratch-card',
    template: `
    <div>
      <img [src]="src" alt="" />
      <p class="text _medium _dark">{{ title | translate }}</p>
    </div>
    `,
    styleUrls: ['./scratch-card.component.scss']
})
export class ScratchCardComponent implements OnInit {
  @Input() public readonly src: string;
  @Input() public readonly title: string;

  constructor() { }

  ngOnInit(): void {
    const { src, title } = this;
    console.log({src, title});
  }
}
