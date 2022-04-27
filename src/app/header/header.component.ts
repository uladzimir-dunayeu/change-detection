import { Component, ElementRef } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-header',
  template: `
    {{service.highlight(el)}}
     <div (click)="onClick()">Header</div>
  `
})
export class HeaderComponent {
  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    setTimeout(() => {}, 0);
  }
}
