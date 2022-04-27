import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>ChangeDetectionStrategy.Default</h1>
      <button (click)="app.tick()">Trigger Change Detection</button>
    </div>
    <div class="tree">
      <ul>
        <li>
          <app-shell></app-shell>
        </li>
      </ul>
    </div>
    <div style="margin-bottom: 5em; clear: both;"></div>
  `
})
export class AppComponent {
  constructor(public app: ApplicationRef) {
  }
}
