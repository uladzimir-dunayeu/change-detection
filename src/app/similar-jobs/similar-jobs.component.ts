import { Component, ElementRef, Input } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-similar-jobs',
  template: `
    {{service.highlight(el)}}
     <div (click)="onClick()">Similar jobs</div>
  `
})
export class SimilarJobsComponent {
  @Input() jobId: any;

  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    setTimeout(() => {}, 0);
  }
}
