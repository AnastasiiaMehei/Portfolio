import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { AnimatedCardDirective } from './animated-card.directive';
import { LanguageService } from './language.service';

const TECH_STACK = [
  { name: 'Node.js', icon: '/node.png' },
  { name: 'Express.js', icon: '/express.png' },
  { name: 'Mongo DB', icon: '/mongo.png' },
  { name: 'React', icon: '/react.png' },
  { name: 'Redux', icon: '/redux.png' },
  { name: 'Angular', icon: '/angular.png' },
  { name: 'Vue', icon: '/vue.png' },
  { name: 'Remix', icon: '/remix.png' },
  { name: 'Next.js', icon: '/next.png' },
  { name: 'TypeScript', icon: '/typeScript.png' },
  { name: 'Tailwind', icon: '/tailwind.png' },
  { name: 'MUI', icon: '/mui.png' }
];

@Component({
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective, AnimatedCardDirective],
  styleUrls: ['./about.component.css'],
  selector: 'app-about',
  template: `
    <section appScrollReveal class="px-4 py-5 sm:px-2">
      <div class="mx-auto max-w-5xl space-y-8">
        <!-- About Me Card -->
        <div class="animated-card rounded-[2rem] border border-black/10 p-4 shadow-xl shadow-black/10 sm:p-4">
          <h2 class="text-3xl font-semibold text-[#151815] sm:text-4xl">{{ labels[language()].aboutMe }}</h2>
          <p class="mt-4 whitespace-pre-wrap leading-8 text-[#333]">{{ labels[language()].aboutMeDescription }}</p>
          
          <div class="mt-4 space-y-3 border-t border-black/10 pt-8">
            <p class="text-sm font-medium text-slate-700">{{ labels[language()].aboutMeEmail }}</p>
            <p class="text-sm font-medium text-slate-700">{{ labels[language()].aboutMeLocation }}</p>
          </div>
        </div>

        <div class="animated-card mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-4 sm:p-4 mt-0">
          <div class="carousel-wrapper">
            <div class="carousel-track">
              <ng-container *ngFor="let tech of carouselTechs()">
                <div class="carousel-item">
                  <div class="tech-icon-wrapper" [title]="tech.name">
                    <img [src]="tech.icon" [alt]="tech.name" class="tech-icon" />
                  </div>
                </div>
              </ng-container>
              <ng-container *ngFor="let tech of carouselTechs()">
                <div class="carousel-item">
                  <div class="tech-icon-wrapper" [title]="tech.name">
                    <img [src]="tech.icon" [alt]="tech.name" class="tech-icon" />
                  </div>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;

  protected readonly carouselTechs = () => TECH_STACK;
}
