import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="text">
        <p class="centered logo-content">UIPTEL&nbsp;©&nbsp;2020</p>
      </div>
    </footer>`,
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
