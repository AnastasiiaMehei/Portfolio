import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.element.nativeElement, 'scroll-reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.element.nativeElement, 'reveal-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
