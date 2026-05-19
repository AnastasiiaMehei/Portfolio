import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2, inject } from '@angular/core';
import { AnimationService } from './animation.service';
import { Subscription } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private animationService = inject(AnimationService);
  private subscription?: Subscription;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.element.nativeElement, 'scroll-reveal');

    this.subscription = this.animationService.observeElement(this.element).subscribe(isVisible => {
      if (isVisible) {
        this.renderer.addClass(this.element.nativeElement, 'reveal-visible');
        this.subscription?.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
