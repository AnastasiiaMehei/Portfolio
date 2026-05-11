import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageService } from './language.service';
import { ScrollRevealDirective } from './scroll-reveal.directive';

const TECH_FILTERS = [
  'All',
  'React',
  'Angular',
  'Vue',
  'Remix',
  'Redux',
  'TypeScript',
  'MUI',
  'Rxjs',
  'Tailwind',
  'Karma-jasmine',
  'Bootstrap5',
  'Docker',
  'Nestjs',
  'Postgresql',
  'Prisma',
  'JavaScript',
  'Bcrypt',
  'Cloudinary',
  'Dotenv',
  'Jtw',
  'Axios',
  'Emotion',
  'Framer-motion',
  'Fontsource'
];

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  selector: 'app-projects',
  template: `
    <section class="px-4 py-5 sm:px-2">
      <div class="mx-auto max-w-7xl grid gap-6 xl:grid-cols-[280px_auto]">
        <aside class="animated-card rounded-[2rem] border border-black/10 p-6 shadow-xl shadow-black/10">
          <h2 class="text-xl font-semibold text-[#151815]">{{ labels[language()].filterTitle }}</h2>
          <p class="mt-2 text-sm text-slate-500">{{ labels[language()].filterDescription }}</p>

          <div class="mt-6 space-y-6">
            <div>
              <p class="text-xs uppercase tracking-[0.28em] text-slate-500">{{ labels[language()].technologies }}</p>
              <div class="mt-0 flex flex-wrap gap-2">
                <button
                  type="button"
                  class="filter-chip"
                  matTooltip="View all projects"
                  [class.active]="selectedTechnology().has('All')"
                  (click)="setTechnologyFilter('All')"
                >
                  {{ labels[language()].allTechs }}
                </button>
                <button
                  *ngFor="let tech of technologies()"
                  type="button"
                  class="filter-chip"
                  [matTooltip]="'Filter by ' + tech"
                  [class.active]="selectedTechnology().has(tech)"
                  (click)="setTechnologyFilter(tech)"
                >
                  {{ tech }}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <div class="space-y-6">
          <div *ngIf="loading()" class="animated-card rounded-[2rem] border border-black/10  p-4 shadow-xl shadow-black/10 text-[#151815]">
            {{ labels[language()].loadingRepos || 'Loading repositories from GitHub...' }}
          </div>
          <div *ngIf="error()" class="rounded-[2rem] border border-red-200 bg-red-50 p-6 text-red-700">
            {{ error() }}
          </div>

          <div *ngIf="!loading() && !error() && filteredRepos().length === 0" class="animated-card rounded-[2rem] border border-black/10 p-4 shadow-xl shadow-black/10 text-[#151815]">
            {{ labels[language()].noRepos || 'No repositories match the selected filter.' }}
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <article *ngFor="let repo of filteredRepos()" class="repo-card rounded-[2rem] border border-black/10 p-6 shadow-xl shadow-black/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              (click)="openRepo(repo.html_url)"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <a
                    [href]="repo.html_url"
                    target="_blank"
                    rel="noreferrer"
                    class="text-xl font-semibold text-[#151815] transition hover:text-cyan-600"
                  >
                    {{ repo.name }}
                  </a>
                  <p class="mt-2 text-sm leading-6 text-slate-600">{{ repo.description || labels[language()].noDescription }}</p>
                </div>
                <span class="text-xs uppercase tracking-[0.32em] text-slate-500">{{ repo.language || 'N/A' }}</span>
              </div>

              <div class="mt-6 flex flex-wrap gap-2">
                <span *ngFor="let tech of getRepoTechs(repo)" class="tech-chip">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>★ {{ repo.stargazers_count }}</span>
                <span>🍴 {{ repo.forks_count }}</span>
                <span>{{ repo.updated_at | date:'mediumDate' }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    ".filter-chip { padding: 0.65rem 1rem; border-radius: 9999px; border: 1px solid rgba(15, 23, 42, 0.08); background: #4a524c; color: #e9f4e8; font-size: 0.85rem; font-weight: 600; transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease; }",
    ".filter-chip:hover { border-color: rgba(14, 165, 233, 0.5); box-shadow: 0 18px 30px rgba(14, 165, 233, 0.12); transform: translateY(-1px); }",
    ".filter-chip.active { background: linear-gradient(135deg, rgba(14, 165, 233, 0.18), rgba(56, 189, 248, 0.22)); border-color: #38bdf8; color: #e0f7ff; box-shadow: 0 18px 30px rgba(56, 189, 248, 0.2); }",
    ".filter-chip.active::after { content: '•'; margin-left: 0.5rem; color: #38bdf8; font-size: 0.85rem; }",
    ".repo-card { animation: fadeInUp 0.36s ease both; }",
    ".repo-card:hover { transform: translateY(-0.5rem) scale(1.01); }",
    "@keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }",
    ".tech-chip { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 0.85rem; border-radius: 9999px; background:#4a524c; color: #e9f4e8; font-size: 0.82rem; font-weight: 600; box-shadow: 0 15px 30px rgba(15, 23, 42, 0.18); }",
    ".tech-chip__icon { display: inline-flex; align-items: center; justify-content: center; width: 1.4rem; height: 1.4rem; border-radius: 0.75rem; color: #e9f4e8; font-size: 0.78rem; box-shadow: 0 8px 18px rgba(15, 23, 42, 0.25); }"
  ]
})
export class ProjectsComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;

  protected openRepo(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  protected readonly repos = signal<GitHubRepo[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly selectedTechnology = signal<Set<string>>(new Set(['All']));

  protected readonly filteredRepos = computed(() => {
    const selected = this.selectedTechnology();
    return this.repos().filter(repo => {
      if (selected.has('All')) {
        return true;
      }
      return this.getRepoTechs(repo).some(tech => selected.has(tech));
    });
  });

  protected readonly technologies = computed(() => {
    return TECH_FILTERS.slice(1);
  });

  constructor() {
    this.loadRepos();
  }

  protected setTechnologyFilter(value: string) {
    const current = new Set(this.selectedTechnology());
    if (value === 'All') {
      this.selectedTechnology.set(new Set(['All']));
      return;
    }

    if (current.has('All')) {
      current.delete('All');
    }

    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }

    if (current.size === 0) {
      current.add('All');
    }

    this.selectedTechnology.set(current);
  }

  protected getRepoTechs(repo: GitHubRepo) {
    const techs = new Set<string>();
    const name = repo.name.toLowerCase();

    if (repo.language) {
      techs.add(this.normalizeTopic(repo.language));
    }
    (repo.topics ?? []).slice(0, 4).forEach(topic => techs.add(this.normalizeTopic(topic)));
    if (name.includes('angular')) techs.add('Angular');
    if (name.includes('vue')) techs.add('Vue');
    if (name.includes('reactnative') || name.includes('react-native')) techs.add('React Native');
    if (name.includes('react')) techs.add('React');
    if (name.includes('next')) techs.add('Next.js');
    if (name.includes('remix')) techs.add('Remix');
    if (name.includes('redux')) techs.add('Redux');
    if (name.includes('tailwind')) techs.add('Tailwind');
    if (name.includes('material')) techs.add('MUI');
    if (name.includes('mongodb')) techs.add('Mongo DB');
    if (name.includes('express')) techs.add('Express.js');
    if (name.includes('node')) techs.add('Node.js');
    if (name.includes('typescript')) techs.add('TypeScript');
    if (!techs.size) techs.add('GitHub');
    return Array.from(techs);
  }

  private normalizeTopic(topic: string) {
    const normalized = topic.toLowerCase();
    if (normalized.includes('mongodb')) return 'Mongo DB';
    if (normalized.includes('express')) return 'Express.js';
    if (normalized.includes('tailwind')) return 'Tailwind';
    if (normalized.includes('typescript')) return 'TypeScript';
    if (normalized.includes('reactnative') || normalized.includes('react-native')) return 'React Native';
    if (normalized.includes('react')) return 'React';
    if (normalized.includes('next')) return 'Next.js';
    if (normalized.includes('remix')) return 'Remix';
    if (normalized.includes('redux')) return 'Redux';
    if (normalized.includes('angular')) return 'Angular';
    if (normalized.includes('material') || normalized.includes('mui')) return 'MUI';
    if (normalized.includes('vue')) return 'Vue';
    if (normalized.includes('node')) return 'Node.js';
    if (normalized.includes('rxjs')) return 'Rxjs';
    if (normalized.includes('karma') || normalized.includes('jasmine')) return 'Karma-jasmine';
    if (normalized.includes('bootstrap')) return 'Bootstrap5';
    if (normalized.includes('docker')) return 'Docker';
    if (normalized.includes('nestjs')) return 'Nestjs';
    if (normalized.includes('postgres')) return 'Postgresql';
    if (normalized.includes('prisma')) return 'Prisma';
    if (normalized.includes('javascript')) return 'JavaScript';
    if (normalized.includes('bcrypt')) return 'Bcrypt';
    if (normalized.includes('cloudinary')) return 'Cloudinary';
    if (normalized.includes('dotenv')) return 'Dotenv';
    if (normalized.includes('jwt') || normalized.includes('jtw')) return 'Jtw';
    if (normalized.includes('axios')) return 'Axios';
    if (normalized.includes('emotion')) return 'Emotion';
    if (normalized.includes('framer')) return 'Framer-motion';
    if (normalized.includes('fontsource')) return 'Fontsource';
    return topic.charAt(0).toUpperCase() + topic.slice(1);
  }

  protected getTechIcon(tech: string) {
    const map: Record<string, string> = {
      TypeScript: 'TS',
      JavaScript: 'JS',
      HTML: 'HTML',
      CSS: 'CSS',
      Angular: 'NG',
      Tailwind: 'TW',
      Material: 'M',
      GitHub: 'GH',
      Unknown: '??'
    };
    return map[tech] ?? tech.slice(0, 2).toUpperCase();
  }

  private async loadRepos() {
    this.loading.set(true);
    this.error.set(null);

    try {
      const response = await fetch('https://api.github.com/users/AnastasiiaMehei/repos?per_page=100&sort=updated', {
        headers: {
          Accept: 'application/vnd.github+json'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repos = await response.json();
      this.repos.set(
        repos.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          topics: repo.topics ?? [],
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          updated_at: repo.updated_at
        }))
      );
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Не вдалося завантажити репозиторії.');
    } finally {
      this.loading.set(false);
    }
  }
}
