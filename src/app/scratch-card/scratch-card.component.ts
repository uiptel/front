import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Scratch } from '../models/scratch';
import { debug } from 'src/logger';

@Component({
  selector: 'app-scratch-card',
  template: `
    <div class="scratch">
      <label class="confirm _round">
        <input type="radio" name="scratch" (change)="change()" [checked]="checked" class="confirm__input" />
        <div class="confirm__view">
          <div class="confirm__field" [class._error]="false">
            <div class="confirm__fieldDot"></div>
          </div>
          <span class="confirm__content">{{ value.title | translate }}</span>
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
export class ScratchCardComponent implements ControlValueAccessor {
  @Input() public readonly value: Scratch;
  public checked = false;

  private onChange: (_: any) => void;
  private onTouched: () => void;

  change() {
    this.checked = true;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.checked = value === this.value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  get imgPath(): string {
    return `./assets/img/${this.value.img}`;
  }
}
