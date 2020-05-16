import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { debug } from 'src/logger';
import config from 'src/config';

const USER_LANG_KEY = 'lang';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <app-menu></app-menu>
    </div>
    `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public lang: string;  

  constructor(private translate: TranslateService) {
    const { defaultLang } = config;
    const lang = localStorage.getItem(USER_LANG_KEY) || window.navigator.language || defaultLang;

    translate.setDefaultLang(defaultLang);
    translate.use(lang);
    debug(`set default language => ${defaultLang}; user language => ${lang}`);
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(({ lang }: LangChangeEvent): void => {
      this.lang = lang;
      localStorage.setItem(USER_LANG_KEY, lang);
      debug(`language change event => ${lang}`);
    });
  }
}
