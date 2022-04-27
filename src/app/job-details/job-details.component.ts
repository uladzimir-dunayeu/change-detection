import { Component, ElementRef } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-job-details',
  template: `
    {{service.highlight(el)}}
        <div (click)="onClick()">
          Job details<br>
          <button (click)="changeJobId()">change jobId</button>
        </div>
        <ul>
          <li>
              <app-job-details-header [jobId]="jobId"></app-job-details-header>
          </li>
          <li>
              <app-job-details-description [jobId]="jobId"></app-job-details-description>
          </li>
          <li>
              <app-similar-jobs [jobId]="jobId"></app-similar-jobs>
          </li>
        </ul>
  `
})
export class JobDetailsComponent {
  jobId = 0;

  constructor(
    public el: ElementRef,
    public service: HighlightService
  ) {}

  onClick() {
    setTimeout(() => {}, 0);
  }

  changeJobId() {
    this.jobId += 1;
  }
}
