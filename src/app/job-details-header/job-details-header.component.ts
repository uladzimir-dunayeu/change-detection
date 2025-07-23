import { Component, ElementRef, Input } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
    selector: 'app-job-details-header',
    template: `
    {{service.highlight(el)}}
     <div (click)="onClick()">Job details header</div>
  `,
    standalone: false
})
export class JobDetailsHeaderComponent {
  @Input() jobId: any;

  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    setTimeout(() => {}, 0);
  }
}
