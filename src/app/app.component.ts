import {Component, OnInit} from '@angular/core';
import {MenuModel, MenuNode} from './menu.model.provider';
import config from '../config';
import {info, debug, dir} from '../logger';

@Component({
    selector: 'app-root',
    template: `
        <div class="app">
            <h2>Hello, World!</h2>
            <app-menu [nodes]="nodes" (selectNode)="select($event)"
                (toggleNode)="toggle($event)">
            </app-menu>
        </div>
    `,
    providers: [MenuModel],
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public nodes: MenuNode[];

    constructor(private menuModel: MenuModel) { }

    ngOnInit(): void {
        const {menuModel} = this;
        this.nodes = menuModel.getData();
        debug(`nodes => ${JSON.stringify(this.nodes)}`);
        info(`app_version => ${config.appVersion} build => ${config.buildHash}`);
    }

    toggle(node: MenuNode): void {
        node.unfolded = !node.unfolded;
    }

    select(node: MenuNode): void {
        info(`node => "${node.title}" selected`);
    }
}
