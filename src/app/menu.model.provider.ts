import {Injectable} from '@angular/core';
import {menuModel} from './menu.model';

export interface MenuNode {
    title: string;
    nodes?: MenuNode[];
    unfolded?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class MenuModel {
    private data: MenuNode[];

    constructor() {
        this.data = menuModel;
    }

    setData(data: MenuNode[]): void {
        this.data = data;
    }

    getData(): MenuNode[] {
        return this.data;
    }
}
