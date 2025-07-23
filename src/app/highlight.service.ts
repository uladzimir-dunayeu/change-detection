import { ElementRef, inject, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  private zone = inject(NgZone);

  highlight(el: ElementRef): void {
    const a = el.nativeElement.querySelector('div');
    a.classList.add('checked');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        a.classList.remove('checked');
      }, 500);
    });
  }
}
