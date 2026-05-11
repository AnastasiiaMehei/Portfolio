import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { LanguageService } from './language.service';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ProjectsComponent } from './projects.component';

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
  imports: [CommonModule, RouterLink, MatIconModule, MatTooltipModule, ScrollRevealDirective, AboutComponent, ContactComponent, ProjectsComponent],
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
