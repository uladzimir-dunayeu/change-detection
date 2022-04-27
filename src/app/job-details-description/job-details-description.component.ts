import { Component, ElementRef, Input } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-job-details-description',
  template: `
    {{service.highlight(el)}}
     <div (click)="onClick()">Job details description</div>
  `
})
export class JobDetailsDescriptionComponent {
  @Input() jobId: any;

  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    setTimeout(() => {}, 0);
  }
}
