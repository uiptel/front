import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-scratch-card',
  template: `
    <div class="scratch">
      <label class="confirm _round">
        <input type="radio" name="scratch" (change)="change($event)" class="confirm__input" />
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
  styleUrls: ['./scratch-card.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ScratchCardComponent),
    multi: true
  }],
})
export class ScratchCardComponent implements OnInit, ControlValueAccessor {
  @Input() public readonly scratch: Scratch;
  private selected: Scratch;

  private onChange: (_: any) => void;
  private onTouched: () => void;

  constructor() { }

  ngOnInit(): void {
    const { img, title } = this.scratch;
    console.log({img, title});
  }

  change($event: Event) {
    console.log('change $event => ', {$event, scratch: this.scratch});
    this.selected = this.scratch;
    this.onChange(this.selected);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.selected = value;
    console.log('writeValue:: value => ', {value}, '; selected => ', this.selected);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  get imgPath(): string {
    return `./assets/img/${this.scratch.img}`;
  }
}
