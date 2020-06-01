import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { debug } from 'src/logger';
import config from 'src/config';

const USER_LANG_KEY = 'lang';

interface Lang {
  lang: string;
  flag: string;
}

const langs: Lang[] = [{lang: 'ru-RU', flag: 'ru'}, {lang: 'en-US', flag: 'gb'}];

@Component({
  selector: 'app-root',
  template: `
    <div class="container root">
      <app-nav [flag]="flag" (toggle)="onToggle()"></app-nav>
      <app-menu></app-menu>
      <app-footer></app-footer>
    </div>
    `,
})
export class RootComponent implements OnInit {
  public lang: string;

  constructor(private translate: TranslateService) {
    const { defaultLang } = config;
    const lang = localStorage.getItem(USER_LANG_KEY) || window.navigator.language || defaultLang;

    translate.setDefaultLang(defaultLang);
    translate.use(lang);
    debug(`set default language => ${defaultLang}; user language => ${lang}`);
  }

  get flag(): string {
    return langs.find(({lang}) => lang === this.lang)?.flag;
  }

  onToggle() {
    const next = langs.find(({lang}) => lang !== this.lang);
    if (next) {
      this.translate.use(next.lang);
    }
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(({ lang }: LangChangeEvent): void => {
      this.lang = lang;
      localStorage.setItem(USER_LANG_KEY, lang);
      debug(`language change event => ${lang}`);
    });
  }
}
