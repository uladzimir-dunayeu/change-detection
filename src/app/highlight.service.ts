import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(private zone: NgZone) {}

  highlight(el: any): void {
    const a = el.nativeElement.querySelector('div');
    a.classList.add('checked');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        a.classList.remove('checked');
      }, 500);
    });
  }
}
