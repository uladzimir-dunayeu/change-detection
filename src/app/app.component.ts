import { ApplicationRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>ChangeDetectionStrategy.Default</h1>
      <button (click)="appRef.tick()">Trigger Change Detection</button>
    </div>
    <div class="tree">
      <ul>
        <li>
          <!--          {{service.highlight(el)}}-->
          <div>1</div>
        </li>
        <li>
          <div>1</div>
        </li>
        <li>
          <div>1</div>
        </li>
      </ul>
    </div>
  `,
  standalone: true,
})
export class AppComponent {
  public appRef = inject(ApplicationRef);
}
