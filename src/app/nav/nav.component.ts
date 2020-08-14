import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { langs, USER_LANG_KEY } from '../langs';
import { debug } from 'src/logger';

@Component({
  selector: 'app-nav',
  template: `
    <section class="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item">
            <p class="logo-content">UIPTEL</p>
          </div>
          <a role="button" (click)="isActive = !isActive" class="navbar-burger"
            [ngClass]="{'is-active': isActive}" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" [ngClass]="{'is-active': isActive}">
          <div class="navbar-start">
            <a class="navbar-item" routerLink="/top-up" routerLinkActive="is-active">
              {{ 'nav.top_up' | translate }}
            </a>
            <a class="navbar-item" routerLink="/sale-point" routerLinkActive="is-active">
              {{ 'nav.sales_point' | translate }}
            </a>
            <a class="navbar-item" routerLink="/support" routerLinkActive="is-active">
              {{ 'nav.support' | translate }}
            </a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" (click)="toggle()">
              <span class="flag-icon flag-icon-{{ flag() }}"></span>
            </a>
          </div>
        </div>
      </nav>
    </section>
  `,
  styles: [':host { position: sticky; top: 0; z-index: 10 }'],
})
export class NavComponent implements OnInit {
    public isActive = false;
    public lang: string;

    constructor(private readonly translate: TranslateService) { }

    ngOnInit(): void {
        this.translate.onLangChange.subscribe(({ lang }) => {
          this.lang = lang;
          localStorage.setItem(USER_LANG_KEY, lang);
          debug(`language change event => ${lang}`);
        });
    }

    flag(): string {
        return langs.find(({lang}) => lang === this.lang)?.flag;
    }

    toggle() {
        const next = langs.find(({lang}) => lang !== this.lang);
        if (next) {
            this.translate.use(next.lang);
        }
    }
}
