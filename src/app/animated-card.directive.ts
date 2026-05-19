import { Directive, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { AnimationService } from './animation.service';
import { Subscription } from 'rxjs';

@Directive({
  standalone: true,
  selector: '.animated-card'
})
export class AnimatedCardDirective implements OnInit {
  private animationService = inject(AnimationService);
  private subscription?: Subscription;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'animated-card');

    this.subscription = this.animationService.observeElement(this.element).subscribe(isVisible => {
      if (isVisible) {
        this.renderer.addClass(this.element.nativeElement, 'animated-card--visible');
        this.subscription?.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}