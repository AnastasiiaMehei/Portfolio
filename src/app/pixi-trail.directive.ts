import { Directive, ElementRef, HostListener, OnInit, OnDestroy, Input, inject } from '@angular/core';
import { PixiEffectsService } from './pixi-effects.service';

@Directive({
  selector: '[appPixiTrail]',
  standalone: true
})
export class PixiTrailDirective implements OnInit, OnDestroy {
  @Input() trailColor: number = 0x06b6d4; // Cyan color (matches button)
  @Input() particleCount: number = 5;

  private pixiEffectsService = inject(PixiEffectsService);
  private element: HTMLElement;
  private canvas: HTMLCanvasElement | null = null;
  private rect: DOMRect | null = null;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  async ngOnInit(): Promise<void> {
    // Create canvas overlay
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '51';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    document.body.appendChild(this.canvas);

    await this.pixiEffectsService.initApp(this.canvas);

    // Update canvas size on window resize
    window.addEventListener('resize', () => this.onWindowResize());
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    this.createTrailEffect(event);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    // Create particles while moving over button
    if (this.element.matches(':hover')) {
      this.createTrailEffect(event);
    }
  }

  private createTrailEffect(event: MouseEvent): void {
    // Create particles at mouse position
    this.pixiEffectsService.createTrailParticles(
      event.clientX,
      event.clientY,
      this.trailColor,
      this.particleCount
    );
  }

  private onWindowResize(): void {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  ngOnDestroy(): void {
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.pixiEffectsService.destroy();
  }
}
