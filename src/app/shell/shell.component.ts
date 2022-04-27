import { Component, ElementRef } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-shell',
  template: `
    {{service.highlight(el)}}
        <div (click)="onClick()">Shell component</div>
        <ul>
          <li>
              <app-header></app-header>
          </li>
          <li>
              <app-job-details></app-job-details>
          </li>
          <li>
              <app-footer></app-footer>
          </li>
        </ul>
  `
})
export class ShellComponent {
  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    console.log('click action');
    setTimeout(() => {}, 0);
  }
}
