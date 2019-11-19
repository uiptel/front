import {Component, EventEmitter, Input, Output, AfterViewInit} from '@angular/core';
import {MenuNode} from './menu.model.provider';

@Component({
    selector: 'app-menu',
    template: `
    <menu>
        <li *ngFor="let node of nodes">
            <button type="button" (click)="selectNode.emit(node)">
                {{ node.title }}
            </button>
            <button type="button" *ngIf="node.nodes" (click)="toggleNode.emit(node)">
                <svg viewBox="0 0 10 10">
                    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z"/>
                </svg>
            </button>
            <app-menu *ngIf="node.nodes" [hidden]="!node.unfolded" [nodes]="node.nodes"
                  (selectNode)="selectNode.emit($event)" (toggleNode)="toggleNode.emit($event)">
            </app-menu>
        </li>
    </menu>
    `,
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
    @Input() private readonly nodes: MenuNode[];
    @Output() private selectNode = new EventEmitter<MenuNode>();
    @Output() private toggleNode = new EventEmitter<MenuNode>();

    constructor() {
    }

    ngAfterViewInit(): void {
        // const {$element} = this;
        // $element.attr('nodes-count', this.nodes.length);
    }
}
