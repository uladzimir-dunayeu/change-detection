import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-footer',
  template: `
    {{service.highlight(el)}}
     <div (click)="onClick()">Footer</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    setTimeout(() => {}, 0);
  }
}
