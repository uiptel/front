import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ResponseModel<T> {
  data: T;
  success: boolean;
  error?: {
    code: number,
    message: string
  };
}

@Component({
  selector: 'app-sale-point',
  template: `
    <section class="sectionPoint">
      <div class="sectionPoint__content">
        <div class="sectionPoint__title">
          <p class="title _grey _medium">{{ 'point.sale_points_address' | translate }}</p>
        </div>
        <div class="sectionPoint__table">
          <ul class="unstyled">
            <li *ngFor="let point of points">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class SalePointComponent implements OnInit {
  public points: string[];

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    this.getPoints().subscribe(data => this.points = data);
  }

  private getPoints(): Observable<string[]> {
    return this.http.get<string[]>('assets/data/sale_points.json');
  }
}
