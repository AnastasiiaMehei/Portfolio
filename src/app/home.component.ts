import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { AnimatedCardDirective } from './animated-card.directive';
import { LanguageService } from './language.service';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ProjectsComponent } from './projects.component';
import { CertificationsComponent } from './certifications.component';

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
  imports: [CommonModule, MatTooltipModule, ScrollRevealDirective, AnimatedCardDirective, AboutComponent, ContactComponent, CertificationsComponent, ProjectsComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;

  protected readonly carouselTechs = () => TECH_STACK;
}
