import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ScrollRevealDirective } from './scroll-reveal.directive';
import { LanguageService } from './language.service';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ScrollRevealDirective],
  template: `
    <section appScrollReveal class="px-4 py-5 sm:px-2">
     <div class="mx-auto grid max-w-6xl gap-8 grid-cols-1">
        <div class="order-2 animated-card rounded-[2rem] border border-black/10  p-8 shadow-xl shadow-black/10 sm:p-4">
          <div class="mb-8">
            <h2 class="mt-3 text-3xl font-semibold text-[#151815] sm:text-4xl">{{ labels[language()].contactFormTitle }}</h2>
          </div>

          <form [formGroup]="contactForm" (ngSubmit)="submitContact()" class="space-y-6">
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ labels[language()].contactFormName }}</mat-label>
              <input matInput formControlName="name" placeholder="{{ labels[language()].contactFormName }}" />
              <p class="mt-2 text-sm text-red-600" *ngIf="nameControl.invalid && (nameControl.dirty || nameControl.touched)">
                <span *ngIf="nameControl.hasError('required')">{{ labels[language()].contactFormNameRequired }}</span>
                <span *ngIf="nameControl.hasError('minlength')">{{ labels[language()].contactFormNameShort }}</span>
              </p>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ labels[language()].contactFormEmail }}</mat-label>
              <input matInput type="email" formControlName="email" placeholder="{{ labels[language()].contactFormEmail }}" />
              <p class="mt-2 text-sm text-red-600" *ngIf="emailControl.invalid && (emailControl.dirty || emailControl.touched)">
                <span *ngIf="emailControl.hasError('required')">{{ labels[language()].contactFormEmailRequired }}</span>
                <span *ngIf="emailControl.hasError('email')">{{ labels[language()].contactFormEmailInvalid }}</span>
              </p>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-full">
              <mat-label>{{ labels[language()].contactFormMessage }}</mat-label>
              <textarea matInput formControlName="message" rows="6" placeholder="{{ labels[language()].contactFormMessage }}"></textarea>
              <p class="mt-2 text-sm text-red-600" *ngIf="messageControl.invalid && (messageControl.dirty || messageControl.touched)">
                <span *ngIf="messageControl.hasError('required')">{{ labels[language()].contactFormMessageRequired }}</span>
                <span *ngIf="messageControl.hasError('minlength')">{{ labels[language()].contactFormMessageShort }}</span>
              </p>
            </mat-form-field>

            <button mat-raised-button class="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60" [disabled]="contactForm.invalid">
              {{ labels[language()].contactFormSubmit }}
            </button>
          </form>
        </div>

        <aside class="visible animated-card">
          <div class="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 p-8 shadow-xl shadow-black/10 sm:p-4">
            <div class="space-y-4">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="https://github.com/AnastasiiaMehei" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800">
                  <img src="gitHub.png" alt="GitHub" class="w-10 h-10 mr-2" />
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/anastasiia-zlahodukh/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500">
                  <img src="linkdin.png" alt="LinkedIn" class="w-10 h-10 mr-2" />
                  LinkedIn
                </a>
                <a href="https://t.me/anastasiamegei" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                  <img src="telegram.png" alt="Telegram" class="w-10 h-10 mr-2" />
                  Telegram
                </a>
                <a href="viber://chat?number=+380961914540" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500">
                  <img src="viber.png" alt="Viber" class="w-10 h-10 mr-2" />
                  Viber
                </a>
                <a href="https://wa.me/380961914540" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-500">
                  <img src="whatsUpp.png" alt="WhatsApp" class="w-10 h-10 mr-2" />
                  WhatsApp
                </a>
                <a href="https://www.canva.com/design/DAGDEsC_duU/LBZqW6l-gb72UaEX3kpp4g/edit" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition hover:bg-cyan-500">
                  <img src="resume.png" alt="Resume" class="w-10 h-10 mr-2" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `,
  styles: [
    'mat-form-field { width: 100%; }',
    'textarea { resize: vertical; min-height: 10rem; }'
  ]
})
export class ContactComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
  protected readonly labels = this.languageService.labels;

  protected contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  get nameControl() {
    return this.contactForm.get('name')!;
  }

  get emailControl() {
    return this.contactForm.get('email')!;
  }

  get messageControl() {
    return this.contactForm.get('message')!;
  }

  protected submitContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Contact form submitted', this.contactForm.value);
    this.contactForm.reset();
  }
}
