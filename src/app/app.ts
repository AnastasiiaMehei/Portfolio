import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterOutlet, RouterLink, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected showLoader = true;
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;
  protected toggleLanguage = () => this.languageService.toggleLanguage();
  private readonly router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.showLoader = false;
      }
    });

    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }
}
