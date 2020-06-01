import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RootComponent } from './root.component';
import { ScratchCardComponent } from './menu/scratch-card/scratch-card.component';
import { scratches } from './menu/models/scratch';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './router.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        RootComponent,
        MenuComponent,
        ScratchCardComponent,
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
export class AppModule { }
