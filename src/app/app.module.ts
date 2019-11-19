import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu.component';
import {MenuModel} from './menu.model.provider';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        {provide: 'menuModel', useClass: MenuModel}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
