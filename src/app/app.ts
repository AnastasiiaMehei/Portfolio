import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterOutlet, RouterLink, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from './language.service';
import { ToastContainerComponent } from './toast-container.component';
import { AnimationService } from './animation.service';
import { PixiTrailDirective } from './pixi-trail.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatTooltipModule, ToastContainerComponent, PixiTrailDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  protected showLoader = true;
  protected showScrollTop = false;
  protected scrollButtonScaled = false;
  protected readonly trailColor = 0x06b6d4; // Cyan color
  protected readonly particleCount = 5;
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;
  protected toggleLanguage = () => this.languageService.toggleLanguage();
  private readonly router = inject(Router);
  private readonly animationService = inject(AnimationService);

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.showLoader = false;
        setTimeout(() => this.triggerAnimations(), 100);
      }
    });

    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    // no-op
  }

  @HostListener('window:scroll', [])
  protected onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollTop = scrollPosition > 300;
  }

  protected scrollToTop(): void {
    this.scrollButtonScaled = true;
    setTimeout(() => {
      this.scrollButtonScaled = false;
    }, 300);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected triggerAnimations(): void {
    this.animationService.triggerAllAnimations();
  }
}
