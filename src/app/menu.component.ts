import {Component, EventEmitter, Input, Output, AfterViewInit, ElementRef} from '@angular/core';
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
    @Input() public readonly nodes: MenuNode[];
    @Output() public selectNode = new EventEmitter<MenuNode>();
    @Output() public toggleNode = new EventEmitter<MenuNode>();

    private el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngAfterViewInit(): void {
        const {el, nodes: {length}} = this;
        el.nativeElement.setAttribute('nodes-count', length);
    }
}
