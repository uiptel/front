import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { debug, info } from 'src/logger';
import { environment } from 'src/environments/environment';
import { Stat } from './Stat';

const USER_LANG_KEY = 'lang';
const { apiUrl } = environment;

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
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
    `,
})
export class RootComponent implements OnInit {
  public lang: string;

  constructor(private translate: TranslateService, private readonly http: HttpClient) {
    const { defaultLang } = environment;
    const language = localStorage.getItem(USER_LANG_KEY) || window.navigator.language || defaultLang;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    translate.setDefaultLang(defaultLang);
    translate.use(language);
    info(`default language => ${defaultLang}; user language => ${language}; timezone => ${timezone}`);

    // -- Send statistic to backend --
    this.http.post<Stat>(`${apiUrl}/stat`, { language, timezone })
      .subscribe(stat => debug('stat => ', stat));
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
    this.translate.onLangChange.subscribe(({ lang }) => {
      this.lang = lang;
      localStorage.setItem(USER_LANG_KEY, lang);
      debug(`language change event => ${lang}`);
    });
  }
}
