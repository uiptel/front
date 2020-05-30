import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Scratch } from '../models/scratch';

@Component({
  selector: 'app-menu',
  template: `
    <section class="sectionMenu">
      <div class="sectionMenu__content">
        <div class="sectionMenu__title">
          <p class="title _grey _medium">{{ 'menu.buy_topup_account' | translate }}</p>
        </div>

        <form class="sectionMenu__form"  [formGroup]="form" (ngSubmit)="onSubmit(form.value)" novalidate>
          <div class="sectionMenu__formEl _flex">
            <div class="_item" *ngFor="let scratch of scratches">
              <app-scratch-card [value]="scratch" formControlName="scratch">
              </app-scratch-card>
            </div>
          </div>
          <div class="sectionMenu__formEl _confirm">
            <label class="confirm _medium">
              <input type="checkbox" class="confirm__input" formControlName="agreement" />
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
              <button class="button _normal _hard" type="submit" [disabled]="!form.valid">
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
  public form: FormGroup;

  constructor(
    @Inject('SCRATCHES') public readonly scratches: Scratch[],
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      scratch: [null, Validators.required],
      agreement: [false, Validators.requiredTrue]
    });
  }

  onSubmit(data: { scratch: Scratch, agreement: boolean }) {
    console.log('submit => ', data);
    this.form.reset();
  }
}
