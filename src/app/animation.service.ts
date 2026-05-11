import { Injectable, ElementRef } from '@angular/core';
import { fromEvent, Observable, Subject, combineLatest, animationFrameScheduler } from 'rxjs';
import { throttleTime, map, startWith, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private scroll$ = fromEvent(window, 'scroll').pipe(
    throttleTime(0, animationFrameScheduler),
    map(() => window.scrollY),
    startWith(0),
    shareReplay(1)
  );

  private triggerAll$ = new Subject<void>();

  constructor() {}

  observeElement(element: ElementRef<HTMLElement>): Observable<boolean> {
    return combineLatest([this.scroll$, this.triggerAll$.pipe(startWith(void 0))]).pipe(
      map(() => {
        const rect = element.nativeElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        return rect.top < windowHeight * 0.8 && rect.bottom > 0;
      })
    );
  }

  triggerAllAnimations() {
    this.triggerAll$.next();
  }
}