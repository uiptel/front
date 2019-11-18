import {Component, OnInit} from '@angular/core';
import config from '../config';
import {info} from '../logger';

@Component({
    selector: 'app-root',
    template: `
        <div class="app">
            <h2>Hello, World!</h2>
        </div>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
       info(`app_version => ${config.appVersion} build => ${config.buildHash}`);
    }
}
