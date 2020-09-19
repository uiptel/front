
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RootComponent } from './root.component';
import { ScratchCardComponent } from './menu/scratch-card/scratch-card.component';
import { scratches } from './menu/models/scratch';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './router.module';
import { SalePointComponent } from './sale-point/sale-point.component';
import { SupportComponent } from './support/support.component';
import { info, debug } from 'src/logger';
import { environment } from 'src/environments/environment';
import { USER_LANG_KEY } from './langs';
import { Stat } from './Stat';

const { apiUrl } = environment;

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        RootComponent,
        MenuComponent,
        ScratchCardComponent,
        SalePointComponent,
        SupportComponent,
        NavComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        { provide: 'SCRATCHES', useValue: scratches },
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
    constructor(private translate: TranslateService, private readonly http: HttpClient) {
        const { defaultLang } = environment;
        const language = localStorage.getItem(USER_LANG_KEY) || window.navigator.language || defaultLang;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const { BUILD_DATE: buildDate, VCS_REF: git, DIGEST_IMAGE: digestImage, VERSION: version } = window.__app_env;

        translate.setDefaultLang(defaultLang);
        translate.use(language);

        http.post<Stat>(`${apiUrl}/stat`, { language, timezone, digestImage, version })
            .subscribe(stat => debug('stat => ', stat));

        info(`default language => ${defaultLang}; user language => ${language}; timezone => ${timezone};
        version => ${version}; build date => ${buildDate}; image => ${digestImage}; git => ${git}`);
    }
}

