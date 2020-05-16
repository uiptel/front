import { Component, OnInit } from '@angular/core';
import {info, debug} from '../logger';
import { Scratch, scratches } from './models/scratch';

@Component({
    selector: 'app-root',
    template: `
      <div class="app">
        <div class="container">
          <div *ngFor="let scratch of scratches" class="box">
            <app-scratch-card [src]="imgPath(scratch.img)" [title]="scratch.title"></app-scratch-card>
          </div>
        </div>
      </div>
    `,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public readonly scratches: Scratch[] = scratches;

    constructor() { }

    imgPath(img: string): string {
        return `./assets/img/${img}`;
    }

    ngOnInit(): void {
    }
}
