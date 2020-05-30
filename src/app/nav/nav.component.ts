import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <section class="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">{{ 'nav.top_up' | translate }}</a>
            <a class="navbar-item">{{ 'nav.sales_point' | translate }}</a>
            <a class="navbar-item">{{ 'nav.support' | translate }}</a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item">EN</a>
          </div>
        </div>
      </nav>
    </section>
  `,
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
